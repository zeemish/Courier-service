const express = require("express");

const router = express.Router();

const orderFormController = require("../controllers/orderFormControllers/orderForm");
const isAuth = require("../middleware/isAuth.js");

router.put("/order-dest", isAuth, orderFormController.destination);

router.put("/order-origin", isAuth, orderFormController.origin);

router.post("/pickup", isAuth, orderFormController.pickupCharges);

router.post("/delivery", isAuth, orderFormController.deliveryCharges);

router.post("/order-header", isAuth, orderFormController.headers);

router.post("/order-footer", isAuth, orderFormController.footer);

module.exports = router;
