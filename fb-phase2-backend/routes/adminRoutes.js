const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

//get all approval requests
router.route('/approvalRequests').get(adminController.approvalRequests);

//approve a request
router.route('/approveRequest/:orgid').patch(adminController.approveRequest);

//decline a request
router.route('/declineRequest/:orgid').patch(adminController.declineRequest);

//approve story request
router.route('/story/approve/:storyid').patch(adminController.approveStoryRequest);

//decline story request
router.route('/story/decline/:storyid').patch(adminController.declineStoryRequest);

//get all story approval requests
router.route('/story/approvalRequests').get(adminController.getAllStoryApprovalRequests)

module.exports = router;
