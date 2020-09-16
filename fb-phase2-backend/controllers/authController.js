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

exports.signup = async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  // checking all credentials are present or not
  if (!firstName || !lastName || !email || !phone || !password)
    return res.status(400).json({ msg: 'fill up all the credentials' });

  try {
    // checking existing user
    let user;
    user = await User.findOne({ email });
    if (user) return res.json({ msg: 'user already exist' });

    // hashing password
    let hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashPassword,
    });

    await newUser.save();

    // generating auth token

    let token = jwt.sign({ id: newUser._id }, process.env.JWT_Key, {
      expiresIn: '1h',
    });

    // returning final response
    res.status(201).json({
      success: true,
      data: {
        ...newUser._doc,
        password: '',
        token,
      },
    });
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ msg: 'cannot signup' });
  }
};

exports.signin = async (req, res) => {
  //
};

/* in the user schema we have to add two more attributes that is
 resetToken and resetTokenExpiration and sendgrid api key to send the mail!!!
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
