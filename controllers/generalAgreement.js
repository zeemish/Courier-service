const GeneralAgreement = require("../models/generalAgreement");

exports.generalAgreement = async (req, res, next) => {
  const {
    name,
    jobNumber,
    customerInitials1,
    customerInitials2,
    customerInitials3,
    customerInitials4,
    customerInitials5,
    customerInitials6,
    customerInitials7,
    customerInitials8,
    customerInitials9,
    customerInitials10,
    customerInitials11,
    shipperSign,
  } = req.body;

  const newGeneralAgreement = new GeneralAgreement({
    name,
    jobNumber,
    customerInitials1,
    customerInitials2,
    customerInitials3,
    customerInitials4,
    customerInitials5,
    customerInitials6,
    customerInitials7,
    customerInitials8,
    customerInitials9,
    customerInitials10,
    customerInitials11,
    shipperSign,
  });

  const savedAgreement = await newGeneralAgreement.save();

  if (savedAgreement) {
    return res.json({ msg: "initials stored", savedAgreement });
  }
};
