const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.route('/approvalRequests').get(adminController.approvalRequests);

router.route('/approveRequest/:orgid').patch(adminController.approveRequest);

router.route('/declineRequest/:orgid').patch(adminController.declineRequest);

module.exports = router;
