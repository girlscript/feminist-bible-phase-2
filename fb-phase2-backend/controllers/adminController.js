const Org = require('../database/models/orgModel');
const Story = require('../database/models/storyModel');
const User = require('../database/models/userModel');
const mongoose = require('mongoose');
const crypto = require('crypto');
const { promisify } = require('util');
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

//get all approval requests
//all Orgs where Org model has approved:false and declined:false
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
exports.approveRequest = async (req, res) => {
  try {
    let org = await Org.findById({ _id: req.params.orgid });
    if (org.approved != true && org.declined != true) {
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
exports.declineRequest = async (req, res) => {
  try {
    let org = await Org.findById({ _id: req.params.orgid });
    if (org.approved != true && org.declined != true) {
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
