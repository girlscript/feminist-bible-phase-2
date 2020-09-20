const Org = require('../database/models/orgModel');

//Org model has unique name field.
// So, if the same org registers again, we must be able to rewrite the record and not save it again
//in that case, it must be updated after finding the document.
//this should go in create org

exports.getOrganizations = async (req, res) => {
  let orgs;
  try {
    orgs = await Org.find();
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ msg: 'cannot get organizations' });
  }
  return res.status(200).json({ orgs: orgs.map((e) => e.toObject()) });
};

exports.createOrganization = async (req, res) => {
  const { name, image, description, url } = req.body;
  let neworg;
  try {
    neworg = new Org({
      name,
      image,
      description,
      url,
    });
    console.log(neworg);
    await neworg.save();
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ msg: 'cannot register org' });
  }

  return res.status(201).json({
    data: {
      ...neworg._doc,
    },
  });
};
