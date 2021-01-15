const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

//create a project
router.route('/').post(projectController.createProject);

//get all projects
router.route('/').get(projectController.getAllProjects);

//get all projects org wise
router.route('/:orgid').get(projectController.getProjectsOrgWise)


//update a project based on id
router.route('/:id').put(projectController.updateProject);

//delete a project
router.route('/:projectid').delete(projectController.deleteProject)


module.exports = router