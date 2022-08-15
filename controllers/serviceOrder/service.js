const serviceOrigin = require("../../models/serviceOrder/origin");
const ServiceDest = require("../../models/serviceOrder/destination");
const SummeryChargesWeight = require("../../models/serviceOrder/summeryCharges/summeryChargesWeight");
const SummeryChargesCB = require("../../models/serviceOrder/summeryCharges/summeryChargesCB");
const SummeryChargesHourly = require("../../models/serviceOrder/summeryCharges/summeryChargesHourly");
const OtherServices = require("../../models/serviceOrder/summeryCharges/otherServices");
const Agent = require("../../models/serviceOrder/agent");
const PaymentForm = require("../../models/serviceOrder/paymentForm");
const OfficialsSign = require("../../models/serviceOrder/officialsSign");
const ServiceHeader = require("../../models/serviceOrder/header");
const CustomerSign = require("../../models/serviceOrder/summeryCharges/customerSign");
const PackingMaterial = require("../../models/serviceOrder/summeryCharges/packingMaterial");
const StorageCharges = require("../../models/serviceOrder/summeryCharges/storageCharges");
const SummeryOfCharges = require("../../models/serviceOrder/summeryCharges/summeryOfCharges");

exports.headers = async (req, res, next) => {
  const { orderNum, pickupDate, firstDeliveryDate } = req.body;
  try {
    if (!orderNum && !pickupDate && !firstDeliveryDate) {
      res.json({
        msg: "please insert the fields (at the top, pickup date order number and first available date of delivery)",
      });
    } else {
      const newHeader = new ServiceHeader({
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

  const dest = new ServiceDest({
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

  const dest = new serviceOrigin({
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

exports.hourlyCharges = async (req, res, next) => {
  const {
    startTime1,
    EndTime1,
    totalHours1,
    startTime2,
    EndTime2,
    totalHours2,
    hour1count,
    men1count,
    truck1count,
    totalMoney1perHour,
    totalFunds1,
    hour2count,
    men2count,
    truck2count,
    totalMoney2perHour,
    totalFunds2,
  } = req.body;

  try {
    if (!startTime1 && !startTime2) {
      return res.json({
        msg: "Please Enter the start and end time (atleast in part 1) ",
      });
    }
    // if (!truck1count && !hour1count && !men1count) {
    //   res.json({ msg: "Are you sure that theres are no any other resources used?" });
    // }
    const hourlyCharges = new SummeryChargesHourly({
      startTime1,
      EndTime1,
      totalHours1,
      startTime2,
      EndTime2,
      totalHours2,
      hour1count,
      men1count,
      truck1count,
      totalMoney1perHour,
      totalFunds1,
      hour2count,
      men2count,
      truck2count,
      totalMoney2perHour,
      totalFunds2,
    });
    const savedCharges = await hourlyCharges.save();

    res.json({ msg: "Data stored successfully", hourlyCharges: savedCharges });
  } catch (error) {
    // if (!startTime1 && !startTime2) {
    //   res.json({
    //     error: "Please Enter the start and end time (atleast in part 1) ",
    //   });
    // }
    console.log(error);
  }
};

exports.cbCharges = async (req, res, next) => {
  const {
    baseCubicFeet,
    chargesPerCB,
    totalChargesCB,
    cbAdditionalCharges1,
    cbAdditionalChargePerCB1,
    cbAdditionalChargeTotal1,
    cbAdditionalCharges2,
    cbAdditionalChargePerCB2,
    cbAdditionalChargeTotal2,
  } = req.body;

  const cubicFeetCharges = new SummeryChargesCB({
    baseCubicFeet,
    chargesPerCB,
    totalChargesCB,
    cbAdditionalCharges1,
    cbAdditionalChargePerCB1,
    cbAdditionalChargeTotal1,
    cbAdditionalCharges2,
    cbAdditionalChargePerCB2,
    cbAdditionalChargeTotal2,
  });

  const savedCBCharges = await cubicFeetCharges.save();

  res.json({ msg: "data stored", cbCharges: savedCBCharges });
};

exports.weightCharges = async (req, res, next) => {
  const {
    baseWeight,
    chargesPerLB,
    totalChargesWeight,
    weightAdditionalCharges1,
    weightAdditionalChargePerLB1,
    weightAdditionalChargeTotal1,
    weightAdditionalCharges2,
    weightAdditionalChargePerLB2,
    weightAdditionalChargeTotal2,
  } = req.body;

  const weightCharges = new SummeryChargesWeight({
    baseWeight,
    chargesPerLB,
    totalChargesWeight,
    weightAdditionalCharges1,
    weightAdditionalChargePerLB1,
    weightAdditionalChargeTotal1,
    weightAdditionalCharges2,
    weightAdditionalChargePerLB2,
    weightAdditionalChargeTotal2,
  });

  const savedWeightCharges = await weightCharges.save();

  res.json({ msg: "data stored", cbCharges: savedWeightCharges });
};

exports.otherServices = async (req, res, next) => {
  const {
    fuelSurcharge,
    totalFuelSurcharge,
    stairsOrigin,
    stairsDestinatin,
    totalStairCharges,
    longCarryOrigin,
    longCarryDestination,
    totalLongCarryCharges,
    shuttleOrigin,
    shuttleDestination,
    totalShuttleCharges,
    elevatorFee,
    bulkyItem,
    extraStopOff,
    valuation,
    other1,
    other2,
    other3,
  } = req.body;

  const otherServices = new OtherServices({
    fuelSurcharge,
    totalFuelSurcharge,
    stairsOrigin,
    stairsDestinatin,
    totalStairCharges,
    longCarryOrigin,
    longCarryDestination,
    totalLongCarryCharges,
    shuttleOrigin,
    shuttleDestination,
    totalShuttleCharges,
    elevatorFee,
    bulkyItem,
    extraStopOff,
    valuation,
    other1,
    other2,
    other3,
  });

  const savedOtherServices = await otherServices.save();

  res.json({
    msg: "Other Services Successfully stored",
    otherServices: savedOtherServices,
  });
};

exports.agentDetails = async (req, res, next) => {
  const { agentName, agentAddress, agentPhone } = req.body;

  const agent = new Agent({
    agentName,
    agentAddress,
    agentPhone,
  });

  const savedAgent = await agent.save();

  if (agentName === "") {
    res.json({ msg: "Please fill the agent details" });
  } else {
    res.json({ savedAgent });
  }
};

exports.officialSign = async (req, res, next) => {
  const { customerSign, customerSignDate, coachSign, coachSignDate } = req.body;
  try {
    if (customerSignDate === "" && coachSignDate === "") {
      return res.json({
        msg: "if you leave the date empty, current date will be entered",
      });
    }

    const signatures = new OfficialsSign({
      customerSign,
      customerSignDate,
      coachSign,
      coachSignDate,
    });

    const savedSign = await signatures.save();

    if (savedSign) {
      res.json({ msg: "data store", savedSign });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.payment = async (req, res, next) => {
  const { customerSign, date, totalCharges } = req.body;

  const payment = new PaymentForm({
    customerSign,
    date,
    totalCharges,
  });

  const savedPayment = await payment.save();

  res.json({ msg: "data stored", savedPayment });
};

exports.customerSignature = async (req, res, next) => {
  const { customerSign, date } = req.body;

  try {
    if (!customerSign && !date) {
      return res.json({ msg: "Please provide your sign and date" });
    }
    const newSign = new CustomerSign({
      customerSign,
      date,
    });

    const savedSign = await newSign.save();

    res.json({ msg: "data stored", savedSign });
  } catch (error) {
    if (!customerSign) {
      return res.json({ error: "Customer sign cannot be empty" });
    }
    if (!date) {
      return res.json({ error: "Date cannot be empty" });
    }
  }
};

exports.packingMaterial = async (req, res, next) => {
  const {
    totalMaterial,
    totalMaterialFund,
    fullPackingService,
    fullPackingServiceFund,
  } = req.body;
  try {
    if (!totalMaterial && !fullPackingService) {
      return res.json({
        msg: "Are you sure that there are no packing materials and labor used",
      });
    }
    const newMaterial = new PackingMaterial({
      totalMaterial,
      totalMaterialFund,
      fullPackingService,
      fullPackingServiceFund,
    });

    const savedNewMaterials = await newMaterial.save();

    res.json({ msg: "data stored", savedNewMaterials });
  } catch (error) {
    console.log(error);
  }
};

exports.storageCharges = async (req, res, next) => {
  const { numberOfDays, volumeinCbFt, fundPerCbFt, total } = req.body;
  try {
    if (!numberOfDays && !volumeinCbFt && !fundPerCbFt && !total) {
      return res.json({ msg: "Please provide storage charges" });
    }
    const charges = new StorageCharges({
      numberOfDays,
      volumeinCbFt,
      fundPerCbFt,
      total,
    });

    const savedCharges = await charges.save();
    res.json({ msg: "saved", savedCharges });
  } catch (error) {
    console.log(error);
  }
};

exports.chargesSummery = async (req, res, next) => {
  const {
    grandTotal,
    partialPayment1,
    partialPayment2,
    Payment1,
    Payment2,
    dueBalance,
    dueBalance2,
    dueBalance3,
    priceAdjustment,
    newDueBalance,
  } = req.body;

  try {
    if (!partialPayment1 && !Payment1) {
      return res.json({ msg: "please fill payment and partial payment" });
    }
    const newCharges = new SummeryOfCharges({
      grandTotal,
      partialPayment1,
      partialPayment2,
      Payment1,
      Payment2,
      dueBalance,
      dueBalance2,
      dueBalance3,
      priceAdjustment,
      newDueBalance,
    });

    const savedCharges = await newCharges.save();

    res.json({ msg: "data stored", savedCharges });
  } catch (error) {
    console.log(error);
  }
};
