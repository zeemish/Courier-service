const express = require("express");

const router = express.Router();

const sendEmailController = require("../controllers/sendEmail");
const isAuth = require("../middleware/isAuth.js");

router.post("/send-email", isAuth, sendEmailController.sendEmail);

module.exports = router;
