const express = require("express");

const router = express.Router();

const interstateController = require("../controllers/interstate");
const additionalChargesController = require("../controllers/additionalCharges");
const isAuth = require("../middleware/isAuth.js");
// console.log(isAuth);

// router.post("/dest", isAuth, interstateController.destination);
router.post("/interstate-dest", isAuth, interstateController.destination);

router.post("/interstate-origin", isAuth, interstateController.origin);

router.post("/old-res", isAuth, interstateController.oldRescission);

router.post("/charges", isAuth, interstateController.addCharges);

router.post(
  "/additional-charges",
  isAuth,
  additionalChargesController.addCharges
);

router.post(
  "/interstate-other-items",
  isAuth,
  interstateController.addOtherItems
);

router.post("/list-one", interstateController.additionalGoodsListOne);

router.post("/list-two", isAuth, interstateController.additionalGoodsListTwo);

router.post("/interstate-header", isAuth, interstateController.setHeader);

router.post("/interstate-sign", isAuth, interstateController.signature);

module.exports = router;
