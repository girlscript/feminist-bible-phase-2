const Project = require('../database/models/projectModel')

//create a project
exports.createProject = async (req, res)=>{
    try{
        const {title, description,postedBy}=req.body;
        if (!title || !description) {
            return res.status(400).json({
                status: 'fail',
                message: 'Fields cannot be empty',
            });
        }
        const project = await Project.create(req.body);
        res.status(201).json({
            status: 'success',
            data: project,
          });
    } catch(error){
        res.status(400).json({
            status: 'fail',
            message: err,
          });
    }
}

//get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json({
          status: 'success',
          data: projects,
        });
      } catch (err) {
        res.status(400).json({
          status: 'fail',
          message: err,
        });
      }
}
//get projects org wise
exports.getProjectsOrgWise = async (req, res) =>{
    try{
        const projects = await Project.find({postedBy: req.params.orgid})
        if(projects.length === 0){
          res.status(400).json({
            message:"fail",
            error: "No projects found"
          })
        }
        else{
          res.status(200).json({
            message: "success",
            projects: projects
          })
        }
        
      } catch (error) {
        res.status(400).json({
          message:"fail",
          error: error
        })
      }
} 