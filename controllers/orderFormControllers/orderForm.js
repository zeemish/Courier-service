const OrderOrigin = require("../../models/orderForm/origin");
const OrderDestination = require("../../models/orderForm/destination");
const DeliveryCharges = require("../../models/orderForm/deliveryCharges");
const PickupCharges = require("../../models/orderForm/pickupCharges");
const OrderFormHeader = require("../../models/orderForm/header");
const OrderFooter = require("../../models/orderForm/footer");

exports.destination = async (req, res, next) => {
  const { name, phone, address, city, state, zip } = req.body;

  if (
    name === "" ||
    phone === "" ||
    address === "" ||
    state === "" ||
    zip === "" ||
    city === ""
  ) {
    return res.json({ msg: "Please fill out the fields" });
  }

  const dest = new OrderDestination({
    name: name,
    phone: phone,
    address: address,
    city: city,
    state: state,
    zip: zip,
  });

  const savedDest = await dest.save().catch((err) => {
    console.log(err);
  });

  res.status(200).json({ msg: "Data Stored", dest: savedDest });
};

exports.origin = async (req, res, next) => {
  const { name, phone, address, city, state, zip } = req.body;

  const dest = new OrderOrigin({
    name: name,
    phone: phone,
    address: address,
    city: city,
    state: state,
    zip: zip,
  });

  const savedOrigin = await dest.save().catch((err) => {
    console.log(err);
  });

  if (
    name === "" &&
    phone === "" &&
    address === "" &&
    state === "" &&
    zip === "" &&
    city === ""
  ) {
    return res.json({ msg: "Please fill out the fields" });
  } else {
    res.status(200).json({ msg: "Data Stored", origin: savedOrigin });
  }
};

exports.deliveryCharges = async (req, res, next) => {
  const {
    flightCarry,
    longCarry,
    shuttleService,
    elevatorService,
    reDelivery,
    waitingService,
    storageService,
  } = req.body;

  const deliveryCharges = new DeliveryCharges({
    flightCarry,
    longCarry,
    shuttleService,
    elevatorService,
    reDelivery,
    waitingService,
    storageService,
  });

  const savedDeliveryCharges = await deliveryCharges.save();

  res.json({
    msg: "Delivery Charges Saved",
    deliveryCharges: savedDeliveryCharges,
  });
};

exports.pickupCharges = async (req, res, next) => {
  const {
    flightCarry,
    longCarry,
    shuttleService,
    elevatorService,
    reDelivery,
    waitingService,
    storageService,
  } = req.body;

  const pickupCharges = new PickupCharges({
    flightCarry,
    longCarry,
    shuttleService,
    elevatorService,
    reDelivery,
    waitingService,
    storageService,
  });

  const savedpickupCharges = await pickupCharges.save();

  res.json({
    msg: "Pickup Charges Saved",
    pickupCharges: savedpickupCharges,
  });
};

exports.headers = async (req, res, next) => {
  const { orderNum, pickupDate, firstDeliveryDate } = req.body;
  try {
    if (!orderNum && !pickupDate && !firstDeliveryDate) {
      res.json({
        msg: "please insert the fields (at the top, pickup date order number and first available date of delivery)",
      });
    } else {
      const newHeader = new OrderFormHeader({
        orderNum,
        pickupDate,
        firstDeliveryDate,
      });

      const savedHeader = await newHeader.save();
      res.json({ msg: "header data saved", savedHeader });
    }
  } catch (e) {
    if (!firstDeliveryDate) {
      res.status(400).json({ error: "first Deliver date cant be empty" });
    }
    if (!orderNum) {
      res.json({ error: "please insert the order number" });
    }
    if (!pickupDate) {
      res.json({ error: "pickup date cant be empty" });
    }
  }
};

exports.footer = async (req, res, next) => {
  const { shipper, date1, date2, movingAndStorage } = req.body;

  try {
    if (!shipper && !date1 && !date2 && !movingAndStorage) {
      return res.json({ msg: "please sign the document and provide date." });
    }
    const newSign = new OrderFooter({
      shipper,
      date2,
      movingAndStorage,
      date1,
    });

    const savedSign = await newSign.save();

    res.json({ msg: "Data Stored", savedSign });
  } catch (error) {
    if (!shipper && !date1) {
      res.json({
        error: `shipper's signature cant be empty. Also provide date`,
      });
    }
    if (!movingAndStorage && !date2) {
      res.json({ error: `couch's signature cant be empty. Also provide date` });
    }
  }
};
