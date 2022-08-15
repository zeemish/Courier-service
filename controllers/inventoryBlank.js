const Origin = require("../models/InventoryBlank1/origin");
const Destination = require("../models/InventoryBlank1/destination");
const Job = require("../models/InventoryBlank1/job");
const Total = require("../models/InventoryBlank1/total");
const OtherCharges = require("../models/InventoryBlank1/otherCharges");
const AdditionalServices = require("../models/InventoryBlank1/additionalServices");
const Bulky = require("../models/InventoryBlank1/Bulky");
const User = require("../models/user");

exports.origin = async (req, res, next) => {
  const { name, phone, address, city, state, zip } = req.body;

  try {
    if (!name && !phone && !address && !city && !state && !zip) {
      return res.json({ msg: "Please fill all the fields" });
    }
    if (!name) {
      return res.json({ error: "Name cannot be empty" });
    }
    if (!phone) {
      return res.json({ error: "Phone cant be empty" });
    }
    if (!address) {
      return res.json({ error: "Address cant be empty" });
    }
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(400).json({ error: "No User found" });
    }
    const newOrigin = await user.createOrigin({
      name,
      phone,
      address,
      city,
      state,
      zip,
    });

    res.json({ msg: "send", newOrigin });
  } catch (error) {
    console.log(error);
  }
};

exports.destination = async (req, res, next) => {
  const { name, phone, address, city, state, zip } = req.body;

  try {
    if (!name && !phone && !address && !city && !state && !zip) {
      return res.json({ msg: "Please fill all the fields" });
    }
    if (!name) {
      return res.json({ error: "Name cannot be empty" });
    }
    if (!phone) {
      return res.json({ error: "Phone cant be empty" });
    }
    if (!address) {
      return res.json({ error: "Address cant be empty" });
    }
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(400).json({ error: "No User found" });
    }
    const newDest = await user.createDestination({
      name,
      phone,
      address,
      city,
      state,
      zip,
    });

    res.json({ msg: "send", newDest });
  } catch (error) {
    console.log(error);
  }
};

exports.otherCharges = async (req, res, next) => {
  const {
    otherChargesName1,
    otherChargesPrice1,
    otherChargesName2,
    otherChargesPrice2,
    otherChargesName3,
    otherChargesPrice3,
  } = req.body;

  try {
    if (!otherChargesName1 && !otherChargesPrice1) {
      return res.json({ msg: "Please fill other charges(atleast one field)" });
    }
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(400).json({ error: "No User found" });
    }
    const newCharges = await user.createCharge({
      otherChargesName1,
      otherChargesPrice1,
      otherChargesName2,
      otherChargesPrice2,
      otherChargesName3,
      otherChargesPrice3,
    });
    // const newOtherCharges = new OtherCharges({
    //   otherChargesName1,
    //   otherChargesPrice1,
    //   otherChargesName2,
    //   otherChargesPrice2,
    //   otherChargesName3,
    //   otherChargesPrice3,
    // });
    // const savedCharges = await newOtherCharges.save();
    res.json({ msg: "data stored", newCharges });
  } catch (error) {
    console.log(error);
  }
};

exports.postAdditionalServices = async (req, res, next) => {
  const {
    additionalServicesName1,
    additionalServicesFee1,
    additionalServicesName2,
    additionalServicesFee2,
    additionalServicesName3,
    additionalServicesFee3,
    timesCustomerbeingChargedForService1,
    timesCustomerbeingChargedForService2,
    timesCustomerbeingChargedForService3,
  } = req.body;

  try {
    if (!additionalServicesName1 && !additionalServicesFee1) {
      return res.json({ msg: "Please fill other charges(atleast one field)" });
    }
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(400).json({ error: "No User found" });
    }
    const services = user.createAdditionalService({
      additionalServicesName1,
      additionalServicesFee1,
      additionalServicesName2,
      additionalServicesFee2,
      additionalServicesName3,
      additionalServicesFee3,
      timesCustomerbeingChargedForService1,
      timesCustomerbeingChargedForService2,
      timesCustomerbeingChargedForService3,
    });
    res.json({ msg: "data stored", services: services });
  } catch (error) {
    if (error) {
    }
  }
};

exports.getAdditional = async (req, res, next) => {
  const {
    additionalServicesName1,
    additionalServicesFee1,
    additionalServicesName2,
    additionalServicesFee2,
    additionalServicesName3,
    additionalServicesFee3,
    timesCustomerbeingChargedForService1,
    timesCustomerbeingChargedForService2,
    timesCustomerbeingChargedForService3,
  } = req.body;

  try {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(400).json({ error: "No User found" });
    }
    const services = user.getAdditionalService();
    const savedServices = await services.save();
    res.json({ msg: "data stored", services: savedServices });
  } catch (error) {
    console.log(error);
  }
}; //issue

exports.job = async (req, res, next) => {
  const { jobNumber, date } = req.body;

  try {
    if (!jobNumber && !date) {
      return res.json({ msg: "Please provide date and job number" });
    }
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(400).json({ error: "No User found" });
    }
    const newJob = user.createJob({
      jobNumber,
      date,
    });
    // const savedJob = await newJob.save();

    res.json({ msg: "data stored", newJob });
  } catch (error) {
    console.log(error);
  }
};

exports.postTotal = async (req, res, next) => {
  let {
    estimated,
    rate,
    fuelSurcharge,
    bulky,
    amount,
    deposit,
    totalEstimatedCharges,
    ownedToday,
  } = req.body;

  if (!estimated && !rate && !bulky && !amount && !deposit) {
    return res.json({ msg: "Fields cannot be empty" });
  } else if (!rate) {
    return res.json({ msg: "Rate cant be empty" });
  } else if (!estimated) {
    return res.json({ msg: "Estimated CF cannot be empty" });
  } else if (!bulky) {
    return res.json({ msg: "Bulky cannot be empty" });
  } else if (!amount) {
    return res.json({ msg: "Please insert Amount" });
  } else if (!deposit) {
    return res.json({ msg: "deposit amount cannot be empty" });
  }

  // const CFR = estimated * rate;
  // fuelSurcharge = CFR / 100;
  // console.log(fuelSurcharge);

  const user = await User.findByPk(req.userId);
  if (!user) {
    res.status(400).json({ error: "No User found" });
  }

  const total = await user.createTotal({
    estimated,
    rate,
    fuelSurcharge,
    bulky,
    amount,
    deposit,
  });

  res.json({ msg: "Data stored", total });
};

exports.getTotal = async (req, res, next) => {
  const countID = req.params.countID;
  console.log(countID);

  try {
    // const updateTotal = await Total.update(
    //   {
    //     fuelSurcharge: req.body.fuelSurcharge,
    //     totalEstimatedCharges: req.body.totalEstimatedCharges,
    //     ownedToday: req.body.ownedToday,
    //   },
    //   { where: { id: countID } }
    // );
    const find = await Total.findOne({ where: { id: countID } });
    if (!find) {
      return res.json({ msg: "there are no values in database" });
    }
    const updateTotal = await find.update(
      {
        fuelSurcharge: req.body.fuelSurcharge,
        totalEstimatedCharges: req.body.totalEstimatedCharges,
        ownedToday: req.body.ownedToday,
      },
      { where: { id: countID } }
    );
    console.log(updateTotal.dataValues);

    res.json({ msg: `total sum is ${updateTotal}`, updateTotal });
    // res.json({ msg: `total sum is ${find}`, find });
  } catch (error) {
    console.log(error);
  }
};

exports.bulkValues = async (req, res, next) => {
  let {
    revised,
    bulkyName1,
    bulkyName2,
    bulkyName3,
    bulkyFee1,
    bulkyFee2,
    bulkyFee3,
    packingMaterial,
  } = req.body;
  try {
    if (!revised) {
      return res.json({
        error:
          "Revised CF cannot be empty. and must be greater than Estimated CF you entered in previous page",
      });
    }

    if (!bulkyFee1) {
      return res.json({ msg: "Please Enter the bulky fee" });
    }

    if (!packingMaterial) {
      return res.json({ msg: "Please enter Packing material charges" });
    }

    if (
      (!bulkyFee2 || bulkyFee2 === null || bulkyFee2 === undefined) &&
      (!bulkyFee3 || bulkyFee3 === null || bulkyFee3 === undefined)
    ) {
      bulkyFee2 = 0;
      bulkyFee3 = 0;
    }

    const user = await User.findByPk(req.userId);
    if (!user) {
      res.status(400).json({ error: "No User found" });
    }

    const newBulks = await user.createBulky({
      revised,
      bulkyName1,
      bulkyFee1,
      bulkyName2,
      bulkyFee2,
      bulkyName3,
      bulkyFee3,
      packingMaterial,
    });

    const savedBulks = await newBulks.save();
    console.log(req.userId);

    res.json({ msg: "bulks Saved", savedBulks });
  } catch (error) {
    console.log(error);
  }
};

exports.getAdditionalServices = async (req, res, next) => {
  const additionalServiceID = req.params.id;
  const {
    timesCustomerbeingChargedForService1,
    additionalServicesName1,
    additionalServicesFee1,
    timesCustomerbeingChargedForService2,
    additionalServicesName2,
    additionalServicesFee2,
    timesCustomerbeingChargedForService3,
    additionalServicesName3,
    additionalServicesFee3,
  } = req.body;

  try {
    if (
      !timesCustomerbeingChargedForService1 &&
      !additionalServicesName1 &&
      !additionalServicesFee1 &&
      !timesCustomerbeingChargedForService2 &&
      !additionalServicesName2 &&
      !additionalServicesFee2 &&
      !timesCustomerbeingChargedForService3 &&
      !additionalServicesName3 &&
      !additionalServicesFee3
    ) {
      return res.json({ error: "cant store to database, Empty values" });
    }

    const additionalService = new AdditionalServices({
      timesCustomerbeingChargedForService1,
      additionalServicesName1,
      additionalServicesFee1,
      timesCustomerbeingChargedForService2,
      additionalServicesName2,
      additionalServicesFee2,
      timesCustomerbeingChargedForService3,
      additionalServicesName3,
      additionalServicesFee3,
    });

    const savedServices = await additionalService.save();
    console.log(savedServices);
    res.json({ msg: "Data stored to db", savedServices });
  } catch (error) {
    console.log(error);
  }
};
