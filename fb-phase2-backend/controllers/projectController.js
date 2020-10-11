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
            status:"fail",
            error: "No projects found"
          })
        }
        else{
          res.status(200).json({
            status: "success",
            data: projects
          })
        }
        
      } catch (error) {
        res.status(400).json({
          status:"fail",
          error: error
        })
      }
}
//delete project
exports.deleteProject =  async (req, res)=>{
    try{
      const project = await Project.findOneAndDelete({_id: req.params.projectid})
      if(!project){
          //project not found
          res.status(400).json({
            status: "fail",
            message: "Project not found."
          })
      } else {
        res.status(200).json({
          status: "success",
          message: "Project deleted successfully."
        })
      }
    }catch(e) {
        res.status(400).json({
          status: "fail",
          message: e
        })
    }
  }