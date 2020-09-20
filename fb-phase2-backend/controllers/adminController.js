const Organization = require('../database/models/organizationModel');

//get all approval requests
//all organizations where organization model has approved: and declined:false
exports.approvalRequests = async (req, res) => {};
//approve a request
//update organization model for that particular organization approved:true and declined:false
exports.approveRequest = async (req, res) => {};
//decline a request
//update org model for that particular org approved:false and declined:true
exports.declineRequest = async (req, res) => {};
