const Org = require('../database/models/orgModel');

exports.getOrganizations = async (req,res)=>{
    let orgs;
    try{
        orgs = await Org.find();
    }
    catch(err){
        console.log(err.message);
        return res.status(400).json({msg:"cannot get organizations"});
    }
    return res.status(200).json({orgs:orgs.map((e)=>e.toObject())});
}

// exports.createOrganization = async(req,res)=>{
//     const {name,image,description,url} = req.body;
//     let neworg;
//     try{
//       neworg = new Org({
//           name,
//           image,
//           description,
//           url
//       });

//       await neworg.save();
//     }
//     catch(err){
//         console.log(err.message);
//         return res.status(400).json({msg:"cannot register org"});
//     }

//     return res.status(201).json({
//         data:{
//             ...neworg._doc
//         }
//     })
// }