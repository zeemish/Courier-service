const express = require("express");

const router = express.Router();

const generalAgreementController = require("../controllers/generalAgreement");
const isAuth = require("../middleware/isAuth.js");

router.post("/agreement", isAuth, generalAgreementController.generalAgreement);

module.exports = router;
