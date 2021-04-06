const express = require('express');
const orgController = require('../controllers/orgController');
const router = express.Router();

router.route('/').get(orgController.getOrgs);
router.route('/').post(orgController.createOrg);
router.route('/:OrgId').put(orgController.updateOrganisation);

//export this router to use it in App.js
module.exports = router;
