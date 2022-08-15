const Footer = require("../models/packingMaterial/footer");
const PackingMaterialHeader = require("../models/packingMaterial/header");

exports.headers = async (req, res, next) => {
  const { orderNum, pickupDate, firstDeliveryDate } = req.body;
  try {
    if (!orderNum && !pickupDate && !firstDeliveryDate) {
      res.json({
        msg: "please insert the fields (at the top, pickup date order number and first available date of delivery)",
      });
    } else {
      const newHeader = new PackingMaterialHeader({
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
    const newSign = new Footer({
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
