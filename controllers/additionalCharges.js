const AdditionalCharge = require("../models/interstateRevised/additionalCharges");

exports.addCharges = async (req, res) => {
  try {
    const {
      newEstimate,
      newPacking,
      fuelSurcharge,
      elevatorSurcharge,
      additionalService1,
      additionalService2,
      additionalService3,
    } = req.body;

    const charges = new AdditionalCharge({
      newEstimate,
      newPacking,
      fuelSurcharge,
      elevatorSurcharge,
      additionalService1,
      additionalService2,
      additionalService3,
    });

    const savedCharges = await charges.save();

    res.json({ msg: "sum saved", sum: savedSum, savedCharges: savedCharges });
  } catch (e) {
    const msg = {};
    e.errors.forEach((error) => {
      let message;
      switch (error.validatorKey) {
        case "not_unique":
          message = "";
      }
      msg[error.path] = message;
    });
  }
};
