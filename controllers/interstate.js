const User = require("../models/user");
const InterstateOrigin = require("../models/interstateRevised/origin");
const InterstateDestination = require("../models/interstateRevised/destination");
const OldRecision = require("../models/interstateRevised/oldRecision");
const AdditionalCharge = require("../models/interstateRevised/additionalCharges");
const AdditionalGoodsListOne = require("../models/interstateRevised/additional1Good");
const AdditionalGoodsListTwo = require("../models/interstateRevised/additional2Good");
const OtherItem = require("../models/interstateRevised/otherItem");
const Header = require("../models/interstateRevised/header");
const Signature = require("../models/interstateRevised/signature");

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
  }

  const dest = new InterstateDestination({
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

// exports.destination = async (req, res, next) => {
//   try {
//     const { name, phone, address, city, state, zip } = req.body;

//     if (
//       name === "" ||
//       phone === "" ||
//       address === "" ||
//       state === "" ||
//       zip === "" ||
//       city === ""
//     ) {
//       const error = new Error("please fill out these fields");
//       error.statusCode = 400;
//       throw error;
//     }

//     const dest = new InterstateDestination({
//       name: name,
//       phone: phone,
//       address: address,
//       city: city,
//       state: state,
//       zip: zip,
//     });

//     const savedDest = await dest.save().catch((err) => {
//       console.log(err);
//     });

//     res.status(200).json({ msg: "Data Stored", dest: savedDest });
//   } catch (error) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

exports.origin = async (req, res, next) => {
  const { name, phone, address, city, state, zip } = req.body;

  const dest = new InterstateOrigin({
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

exports.oldRescission = async (req, res, next) => {
  const { weight, totalCharges } = req.body;

  const oldRescission = new OldRecision({
    weight: weight,
    totalCharges: totalCharges,
  });
  const savedOldRescission = await oldRescission.save();
  return res.json({ msg: "Data storedd", oldRescission: savedOldRescission });
};

exports.addCharges = async (req, res) => {
  const {
    newEstimate,
    newPacking,
    fuelSurcharge,
    elevatorSurcharge,
    additionalService1,
    additionalService2,
    additionalService3,
    totalEstimate,
    priceAdjustment,
    adjustedBalance,
    estimateAmount,
  } = req.body;

  const charges = new AdditionalCharge({
    newEstimate,
    newPacking,
    fuelSurcharge,
    elevatorSurcharge,
    additionalService1,
    additionalService2,
    additionalService3,
    totalEstimate,
    priceAdjustment,
    adjustedBalance,
    estimateAmount,
  });

  if (
    additionalService1 === "" ||
    additionalService2 === "" ||
    additionalService3 === ""
  ) {
    return 0;
  }

  if (
    newEstimate === "" ||
    newPacking === "" ||
    fuelSurcharge === "" ||
    elevatorSurcharge === ""
  ) {
    // return res.json({
    //   msg: "Please fill the fields that are above additional services",
    // });
  }

  const savedCharges = await charges.save();

  res.json({
    msg: "addition saved",
    savedCharges: savedCharges,
  });
};

exports.addOtherItems = async (req, res, next) => {
  const { name, numOfItem, weight } = req.body;

  const newItems = new OtherItem({
    name,
    numOfItem,
    weight,
  });

  const savedItems = await newItems.save();

  res.json({ msg: " Data Stored to other items", items: savedItems });
};

exports.additionalGoodsListOne = async (req, res, next) => {
  const {
    smallBoxItem,
    smallBoxWeight,
    mediumBoxItem,
    mediumBoxWeight,
    largeBoxItem,
    largeBoxWeight,
    xLargeBoxItem,
    xLargeBoxWeight,
    WardrobBoxItem,
    WardrobBoxWeight,
    dishPackBoxItem,
    dishPackBoxWeight,
    picBoxItem,
    picBoxWeight,
    lampBoxItem,
    lampBoxWeight,
    coffeeTableItem,
    coffeeTableWeight,
    DinningTableItem,
    DinningTableWeight,
    endTableItem,
    endTableWeight,
    mattressItem,
    mattressWeight,
    largeCouchItem,
    largeCouchWeight,
    smallCouchItem,
    smallCouchWeight,
    reclinerItem,
    reclinerWeight,
    deskItem,
    deskWeight,
  } = req.body;

  const newListItem = new AdditionalGoodsListOne({
    smallBoxItem,
    smallBoxWeight,
    mediumBoxItem,
    mediumBoxWeight,
    largeBoxItem,
    largeBoxWeight,
    xLargeBoxItem,
    xLargeBoxWeight,
    WardrobBoxItem,
    WardrobBoxWeight,
    dishPackBoxItem,
    dishPackBoxWeight,
    picBoxItem,
    picBoxWeight,
    lampBoxItem,
    lampBoxWeight,
    coffeeTableItem,
    coffeeTableWeight,
    DinningTableItem,
    DinningTableWeight,
    endTableItem,
    endTableWeight,
    mattressItem,
    mattressWeight,
    largeCouchItem,
    largeCouchWeight,
    smallCouchItem,
    smallCouchWeight,
    reclinerItem,
    reclinerWeight,
    deskItem,
    deskWeight,
  });

  const savedLI = await newListItem.save();

  res.json({ msg: "data stored", savedLI });
};

exports.additionalGoodsListTwo = async (req, res, next) => {
  const {
    safeItem,
    safeWeight,
    televisionItem,
    televisionWeight,
    washingMachineItem,
    washingMachineWeight,
    stoveItem,
    stoveWeight,
    refrigeratorItem,
    refrigeratorWeight,
    applianceItem,
    applianceWeight,
    cabinateItem,
    cabinateWeight,
    bedroomDresserItem,
    bedroomDresserWeight,
    bookCaseItem,
    bookCaseWeight,
    patioFurnitureItem,
    patioFurnitureWeight,
    storageCabinetItem,
    storageCabinetWeight,
    areaRugItem,
    areaRugWeight,
    BBQItem,
    BBQWeight,
    outdoorFurnitureItem,
    outdoorFurnitureWeight,
    bikeEquipItem,
    bikeEquipWeight,
    toolBoxItem,
    toolBoxWeight,
  } = req.body;

  const newLI = new AdditionalGoodsListTwo({
    safeItem,
    safeWeight,
    televisionItem,
    televisionWeight,
    washingMachineItem,
    washingMachineWeight,
    stoveItem,
    stoveWeight,
    refrigeratorItem,
    refrigeratorWeight,
    applianceItem,
    applianceWeight,
    cabinateItem,
    cabinateWeight,
    bedroomDresserItem,
    bedroomDresserWeight,
    bookCaseItem,
    bookCaseWeight,
    patioFurnitureItem,
    patioFurnitureWeight,
    storageCabinetItem,
    storageCabinetWeight,
    areaRugItem,
    areaRugWeight,
    BBQItem,
    BBQWeight,
    outdoorFurnitureItem,
    outdoorFurnitureWeight,
    bikeEquipItem,
    bikeEquipWeight,
    toolBoxItem,
    toolBoxWeight,
  });

  const savedLI = await newLI.save();

  res.json({ msg: "data stored", savedLI });
};

exports.setHeader = async (req, res, next) => {
  const { orderNum, pickupDate, firstDeliveryDate } = req.body;
  try {
    if (!orderNum && !pickupDate && !firstDeliveryDate) {
      res.json({
        msg: "please insert the fields (at the top, pickup date order number and first available date of delivery)",
      });
    } else {
      const newHeader = new Header({
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

exports.signature = async (req, res, next) => {
  const { shipper, date1, date2, movingAndStorage } = req.body;

  try {
    if (!shipper && !date1 && !date2 && !movingAndStorage) {
      return res.json({ msg: "please sign the document and provide date." });
    }
    const newSign = new Signature({
      shipper,
      date1,
      date2,
      movingAndStorage,
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
