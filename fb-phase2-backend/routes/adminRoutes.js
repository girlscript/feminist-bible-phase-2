const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

//get all approval requests
router.route('/approvalRequests').get(adminController.approvalRequests);

//approve a request
router.route('/approveRequest').patch(adminController.approveRequest);

//decline a request
router.route('/declineRequest').patch(adminController.declineRequest);

module.exports = router;
