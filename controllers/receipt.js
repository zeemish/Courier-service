const Receipt = require("../models/receipt/receipt");
const DeliveryOrder = require("../models/receipt/deliveryOrder");
const Signature = require("../models/receipt/sign");

exports.receipt = async (req, res, next) => {
  const {
    dateIssued,
    jobNumber,
    accountNumber,
    address,
    storageCharge,
    daysFromDateOfIssue,
  } = req.body;

  //   if (dateIssued === "") {
  //     const today = new Date();

  //     const date = `${today.getFullYear()} - ${
  //       today.getMonth() + 1
  //     } - ${today.getDate()}`;

  //     res.json({ dateIssued: date });
  //   }

  const receipt = new Receipt({
    dateIssued,
    jobNumber,
    accountNumber,
    address,
    storageCharge,
    daysFromDateOfIssue,
  });

  const savedReceipt = await receipt.save();

  if (savedReceipt) {
    res.json({ msg: "receipt data saved", savedReceipt });
  }
};

exports.deliveryOrder = async (req, res, next) => {
  const { name, zipCode, streetAddress, deliveryDate } = req.body;

  const newDeliveryOrder = new DeliveryOrder({
    name,
    zipCode,
    streetAddress,
    deliveryDate,
  });

  const savedOrder = await newDeliveryOrder.save();

  // if (
  //   name === "" &&
  //   zipCode === "" &&
  //   streetAddress === "" &&
  //   deliveryDate === ""
  // ) {
  //   res.json({
  //     error: "Please fill the fields. Above Fields Cannot be empty",
  //   });
  // } else {
  //   res.json({ savedOrder, msg: "Data Stored" });
  // }

  if (savedOrder) {
    res.json({ savedOrder, msg: "Data Stored" });
  }
};

exports.signature = async (req, res, next) => {
  const { customerSign, date } = req.body;

  const signature = new Signature({
    customerSign,
    date,
  });

  const savedSign = await signature.save();

  if (customerSign === "") {
    res.json({ msg: "Signature must not be empty" });
  } else {
    res.json({ msg: "data Stored", savedSign });
  }
};
