const User = require("../models/user");

exports.valuationSelection = async (req, res, next) => {
  const {
    customerName,
    orderNumber,
    pickupDate,
    op1ShipmentValue,
    op1Deductible,
    op1ValueProtection,
    op1CustomerSignature,
    op1Date,
    op2CustomerInitials,
    op2shipmentValue,
    op2EstimateOfCost,
    op2CustomerSignature,
    op2Date,
  } = req.body;

  try {
    if (!customerName && !orderNumber && !pickupDate) {
      return res.json({
        msg: "Please enter name, order number and pickup date",
      });
    }
    if (!customerName) {
      return res.json({ error: "Customer Name cant be empty" });
    }

    if (!orderNumber) {
      return res.json({ error: "Order number cant be empty" });
    }

    if (!pickupDate) {
      return res.json({ error: "Provide pickup date" });
    }

    if (!op1CustomerSignature && !op2CustomerInitials) {
      return res.json({
        error:
          "You must fill one option from the two. Both options cannot be empty",
      });
    }

    if (op1CustomerSignature && op2CustomerInitials) {
      return res.json({
        error:
          "You cannot fill both options. You only have to select one option. ",
      });
    }

    if (op1Date && op2Date) {
      return res.json({
        error:
          "You cannot fill both options. You only have to select one option. ",
      });
    }

    if (op1ShipmentValue && op2shipmentValue) {
      return res.json({
        error:
          "You cannot fill both options. You only have to select one option. ",
      });
    }

    const user = await User.findByPk(req.userId);
    if (!user) {
      res.status(400).json({ error: "No User found" });
    }

    const optionSelection = user.createValuationSelection({
      customerName,
      orderNumber,
      pickupDate,
      op1ShipmentValue,
      op1Deductible,
      op1ValueProtection,
      op1CustomerSignature,
      op1Date,
      op2CustomerInitials,
      op2shipmentValue,
      op2EstimateOfCost,
      op2CustomerSignature,
      op2Date,
    });

    // const savedSelection = optionSelection.save();

    res.json({ msg: "data saved", savedSelection: optionSelection });
  } catch (error) {
    console.log(error);
  }
};
