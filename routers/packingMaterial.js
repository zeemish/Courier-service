const express = require("express");

const router = express.Router();

const packingMaterialController = require("../controllers/packingMaterial");

const isAuth = require("../middleware/isAuth.js");

router.post("/packing-header", isAuth, packingMaterialController.headers);

router.post("/packing-material-signature", packingMaterialController.footer);

module.exports = router;
