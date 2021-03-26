const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

router.route('/').post(projectController.createProject);

router.route('/').get(projectController.getAllProjects);

router.route('/:orgid').get(projectController.getProjectsOrgWise);

router.route('/:id').put(projectController.updateProject);

router.route('/:projectid').delete(projectController.deleteProject);

module.exports = router;
