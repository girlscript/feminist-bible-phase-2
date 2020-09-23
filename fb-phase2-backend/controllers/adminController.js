const Organization = require('../database/models/orgModel');

//get all approval requests
//all organizations where organization model has approved:false and declined:false
exports.approvalRequests = async (req, res) => {
  try {
    const orgs = await Organization.find({ declined: false, approved: false });
    if (!orgs) {
      return res.status(400).json({
        message: 'Organizations requiring approval not found!',
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
//update organization model for that particular organization approved:true and declined:false
exports.approveRequest = async (req, res) => {
  try {
    let org = await Organization.findById({ _id: req.params.orgid });
    if (org.approved != true && org.declined != true) {
      org = await Organization.findByIdAndUpdate(
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
          organization: org,
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
    let org = await Organization.findById({ _id: req.params.orgid });
    if (org.approved != true && org.declined != true) {
      org = await Organization.findByIdAndUpdate(
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
