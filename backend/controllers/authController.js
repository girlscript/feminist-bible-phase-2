const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const sendgridTransport = require('nodemailer-sendgrid-transport');
require('../config/dotenv');

const User = require('../database/models/userModel');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: '',
    },
  })
);

const getAuthCookie = (token) => {
  const expiry = new Date(Date.now() + +process.env.JWT_COOKIE_EXPIRES_IN);
  return `token=${token}; Domain=${process.env.JWT_COOKIE_DOMAIN}; Expires=${expiry.toGMTString()}; Path=/; HttpOnly=true; SameSite=Lax; Secure=true;`
};

//signup 
/**
 * @param {String} orgId
 * @param {String} email
 * @param {String} phone
 * @param {ImageBitmap} photo
 * @param {String} password
 * @param {String} passwordConfirm
 * @route api/auth/signup
 */
exports.signup = async (req, res) => {
  const { name, email, phone, photo, password, passwordConfirm } = req.body;
  console.log(req.body);
  // checking all credentials are present or not
  if (!name || !email || !phone || !password)
    return res.status(400).json({ msg: 'fill up all the credentials' });

  try {
    // checking existing user
    let user;
    user = await User.findOne({ email });
    if (user) return res.json({ msg: 'user already exist' });

    if (password !== passwordConfirm)
      return res
        .status(400)
        .json({ msg: 'password and confirm password dont match' });
    // hashing password
    let hashPasswordConfirm = await bcrypt.hash(passwordConfirm, 10);
    let hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      photo,
      phone,
      password: hashPassword,
      passwordConfirm: hashPasswordConfirm,
    });

    await newUser.save();

    // generating auth token
    let token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    //set cookie
    res.set('Cookie', getAuthCookie(token));
    
    // returning final response
    res.status(201).json({
      success: true,
      data: {
        ...newUser._doc,
        password: '',
        passwordConfirm: ""
      },
    });
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ msg: 'cannot signup' });
  }
};

//signin
/**
 * @param {String} email
 * @param {String} password
 * @route api/auth/signin
 */
exports.signin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ msg: 'fill up all the credentials' });

  try {
    let existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(400).json({ msg: 'invalid credentials' });

    let isPasswordTrue = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordTrue)
      return res
        .status(400)
        .json({ msg: 'invalid credentials,check your password' });

    let token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    //set cookie
    res.set('Cookie', getAuthCookie(token));

    res.status(200).json({
      success: true,
      data: {
        ...existingUser._doc,
        password: '',
        passwordConfirm: ""
      },
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ msg: 'cannot sign in' });
  }
};

/* in the user schema we have to add two more attributes that is
 resetToken and resetTokenExpiration and sendgrid api key to send the mail!!!
*/

//post reset
/**
 * @param {String} email
 */
exports.postReset = async (req, res) => {
  try {
    crypto.randomBytes(32, async (err, buffer) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: 'error!' });
      }
      const token = buffer.toString('hex');
      const user = await User.findOne({ email: req.body.email });
      user.resetToken = token;
      user.resetTokenExpiration = Date.now() + 3600000;
      const result = await user.save();
      res.status(200).json({ message: 'success!' });
      transporter.sendMail({
        to: req.body.email,
        from: 'girlscript@node-complete.com',
        subject: 'Password reset',
        html: `
          <p>You requested a password reset</p>
          <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
        `,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'error!' });
  }
};

//get new password
/**
 * @param {String} token
 */
exports.getNewPassword = async (req, res) => {
  try {
    const token = req.params.token;
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() },
    });
    if (user) {
      res.status(200).json({
        message: 'success',
        userId: user._id.toString(),
        passwordToken: token,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'error!' });
  }
};

//post new password
/**
 * @param {String} password
 * @param {String} confirmPassword
 * @param {Number} userId
 * @param {String} passwordToken
 * @route api/auth/signup
 */
exports.postNewPassword = async (req, res) => {
  try {
    const newPassword = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const userId = req.body.userId;
    const passwordToken = req.body.passwordToken;
    let resetUser;
    if (newPassword === confirmPassword) {
      const user = await User.findOne({
        resetToken: passwordToken,
        resetTokenExpiration: { $gt: Date.now() },
        _id: userId,
      });
      resetUser = user;
      const hashedPassword = bcrypt.hash(newPassword, 12);
      resetUser.password = hashedPassword;
      resetUser.resetToken = undefined;
      resetUser.resetTokenExpiration = undefined;
      await resetUser.save();
      res.status(201).json({ message: 'success' });
    } else {
      res
        .status(500)
        .json({ message: 'password and confirm password did not match' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'error!' });
  }
};

//check if is signed in
/**
 * @param {Number} userId
 * @param {String} token
 */
exports.isSignedIn = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  const data = jwt.verify(token, process.env.JWT_SECRET);
  try {
    const user = User.findOne({ _id: userId, token: token });
    if (!user) {
      throw new NoUserFoundError('User is currently not logged in');
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    const err_code = error.err_code
      ? err.code >= 100 && err.code <= 599
        ? err.code
        : 500
      : 500;
    res.status(err_code).json({
      status: 'fail',
      message: err.message || 'Internal Server Error',
    });
  }
};

exports.validateCookie = (req, res, next) => {
  try {
    const res = jwt.verify(req.cookies.token, process.env.JWT_SECRET)
    if (res.id) { 
      next();
    } else {
      throw new Error("Invalid USER ID");
    }
  } catch (err) {
    res.status(401)
    res.end("Unauthorized")
  }
}