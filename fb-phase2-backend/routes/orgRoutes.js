const express = require('express');
const orgController = require('../controllers/orgController');
const router = express.Router();

router.route('/getorganizations').get(orgController.getOrganizations);

// router.route('/addorganizations')
// .post(orgController.createOrganization);

module.exports = router;
