const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

//Using this route to create project from projectController.
router.route('/').post(projectController.createProject);

//Using this route to get all projects from projectController.
router.route('/').get(projectController.getAllProjects);

//Using orgid as a parameter within this route to get Org wise project from projectController.
router.route('/:orgid').get(projectController.getProjectsOrgWise);

//Using id as a parameter within this route to update project from projectController.
router.route('/:id').put(projectController.updateProject);

//Using projectId as a parameter within this route to delete project from projectController.
router.route('/:projectid').delete(projectController.deleteProject);

//export this router to use it in App.js
module.exports = router;
