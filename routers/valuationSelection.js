const express = require("express");

const router = express.Router();

const valuationSelectionController = require("../controllers/valuationSelection");

const isAuth = require("../middleware/isAuth.js");

router.post(
  "/valuation-selection",
  isAuth,
  valuationSelectionController.valuationSelection
);

module.exports = router;
