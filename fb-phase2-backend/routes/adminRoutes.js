const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

//get all approval requests
router.route('/approvalRequests').get(adminController.approvalRequests);

//approve a request
router.route('/approveRequest/:orgid').patch(adminController.approveRequest);

//decline a request
router.route('/declineRequest/:orgid').patch(adminController.declineRequest);

module.exports = router;
