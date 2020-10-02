const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

//create a project
router.route('/new').post(projectController.createProject);

//get all projects
router.route('/all').get(projectController.getAllProjects);

//get all projects org wise
router.route('/:orgid').get(projectController.getProjectsOrgWise)

module.exports = router