const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth");

router.put("/signup", authController.signup);

router.post("/login", authController.login);

router.post("/reset", authController.forgotPassword);

router.post("/new-password", authController.resetPassword);

module.exports = router;
