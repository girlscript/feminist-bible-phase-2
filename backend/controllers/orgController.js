const Org = require('../database/models/orgModel');

//Org model has unique name field.
// So, if the same org registers again, we must be able to rewrite the record and not save it again
//in that case, it must be updated after finding the document.
//this should go in create org

exports.getOrgs = async (req, res) => {
  let orgs;
  try {
    orgs = await Org.find();
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ msg: 'cannot get Orgs' });
  }
  return res.status(200).json({ orgs: orgs.map((e) => e.toObject()) });
};

exports.createOrg = async (req, res) => {
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
exports.updateOrganisation = async (req, res) => {
  try {
    const org_id = req.param.OrgId;
    const org = await Org.findOneAndUpdate({ _id: org_id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!org)
      throw new NotFoundError('Organisation with ${org_id} could not be found');

    return res.json({ message: 'success', data: org });
  } catch (err) {
    const err_code = err.err_code
      ? err.code >= 100 && err.code <= 599
        ? err.code
        : 500
      : 500;
    res
      .status(err_code)
      .json({ message: err.message || 'Internal Server Error' });
  }
};
