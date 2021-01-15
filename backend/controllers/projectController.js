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


//Get a single project b project ID

exports.getProject= async(req,res)=>{
  try {
    const project = await Project.findOne({ _id: req.params.projectId});
    if (!project) {
      return res.status(400).json({
        status: 'fail',
        message: 'No project found',
      });
    }
    res.status(200).json({
      message: 'Success',
      data: project,
    });
  } catch (error) {
    const err_code = error.err_code
    ? err.code >= 100 && err.code <= 599
      ? err.code
      : 500
    : 500;
  res.status(err_code).json({ status:'fail',message: error.message || 'Internal Server Error' });


}

}

//Update a project by _id
exports.updateProject=async (req,res)=>{
    try{
        const result= await Project.updateOne({_id:req.params.id},{
            $set:{
                title:req.body.title,
                description:req.body.description
            }
        });
        const project=await Project.findById(req.params.id);

        return res.status(200).json({
            message: "success",
            project: project
        })
    }
    catch (error) {
        return res.status(400).json({
            message:"fail",
            error: error.message
        })
    }
}

