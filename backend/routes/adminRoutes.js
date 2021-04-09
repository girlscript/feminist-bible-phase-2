const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

//Using approvalrequests as a parameter within this route to approve request from adminController.
router.route('/approvalRequests').get(adminController.approvalRequests);

//Using organisation id as a parameter within this route to approve request from adminController.
router.route('/approveRequest/:orgId').patch(adminController.approveRequest);

//Using organisation id as a parameter within this route to decline request from adminController.
router.route('/declineRequest/:orgId').patch(adminController.declineRequest);

//export this router to use it in App.js
module.exports = router;
