const express = require('express');
const orgController = require('../controllers/orgController');
const router = express.Router();

//Using getOrgs as a path parameter within this route to get organisations from orgController.
router.route('/getOrgs').get(orgController.getOrgs);

//export this router to use it in App.js
module.exports = router;
