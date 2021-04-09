const Org = require('../database/models/orgModel');
const Admin = require('../database/models/adminModel');
const jwt = require('jsonwebtoken');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
  });

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

//signup
/**
 * @param {String} name
 * @param {String} email
 * @param {String} password
 * @param {String} passwordConfirm
 */
exports.signup = async (req, res, next) => {
  const newAdmin = await Admin.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  createSendToken(newAdmin, 201, req, res);
};

//login
/**
 * @param {String} email
 * @param {String} password
 */
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }
  // 2) Check if admin exists && password is correct
  const admin = await Admin.findOne({ email });

  if (!admin || !(await admin.correctPassword(password, admin.password))) {
    return res.status(400).json({
      status: 'success',
      message: 'Error occurred',
    });
  }

  // 3) If everything ok, send token to client
  createSendToken(admin, 200, req, res);
};

//logout
exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
  });
  res.status(200).json({ status: 'success' });
};

//get all approval requests
//all Orgs where Org model has approved:false and declined:false
/**
 * @route api/admin/declineRequests
 */
exports.approvalRequests = async (req, res) => {
  try {
    const orgs = await Org.find({ declined: false, approved: false });
    if (!orgs) {
      return res.status(400).json({
        message: 'Orgs requiring approval not found!',
      });
    }
    res.status(200).json({
      message: 'Success',
      data: orgs,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Error!',
    });
  }
};

//approve a request
//update Org model for that particular Org approved:true and declined:false
/**
 * @param {Number} orgid
 * @route api/admin/approveRequest/:orgid
 */
exports.approveRequest = async (req, res) => {
  try {
    let org = await Org.findById(req.params.orgid);
    if (org.approved !== true && org.declined !== true) {
      org = await Org.findByIdAndUpdate(
        { _id: req.params.orgid },
        { approved: true },
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200).json({
        message: 'Successfully approved!',
        data: {
          Org: org,
        },
      });
    } else {
      res.status(400).json({
        message: 'Cannot approve!',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: 'Error!',
    });
  }
};

//decline a request
//update org model for that particular org approved:false and declined:true
/**
 * @param {Number} orgid
 * @route api/admin/declineRequest/:orgid
 */
exports.declineRequest = async (req, res) => {
  try {
    let org = await Org.findById(req.params.orgid);
    if (org.approved !== true && org.declined !== true) {
      org = await Org.findByIdAndUpdate(
        { _id: req.params.orgid },
        { declined: true },
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200).json({
        message: 'Successfully declined!',
        data: org,
      });
    } else {
      res.status(400).json({
        message: 'Cannot decline!',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: 'Error!',
    });
  }
};
