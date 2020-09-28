const express = require('express');
const orgController = require('../controllers/orgController');
const router = express.Router();

router.route('/getOrgs').get(orgController.getOrgs);

// router.route('/addOrgs').post(orgController.createOrg);

module.exports = router;
