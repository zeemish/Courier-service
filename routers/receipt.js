const express = require("express");

const router = express.Router();

const receiptController = require("../controllers/receipt");
const isAuth = require("../middleware/isAuth.js");

router.post("/receipt", isAuth, receiptController.receipt);

router.post("/delivery-order", isAuth, receiptController.deliveryOrder);

router.post("/sign", isAuth, receiptController.signature);

module.exports = router;
