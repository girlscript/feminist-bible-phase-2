const express = require('express');
const orgController = require('../controllers/orgController');
const router = express.Router();

router.route('/').get(orgController.getOrgs);
router.route('/').post(orgController.createOrg);
router.route('/:OrgId').put(orgController.updateOrganisation);

module.exports = router;
