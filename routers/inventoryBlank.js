const express = require("express");

const router = express.Router();

const inventoryBlankController = require("../controllers/inventoryBlank");
const isAuth = require("../middleware/isAuth.js");

router.put("/inventory-dest", isAuth, inventoryBlankController.destination);

router.put("/inventory-origin", isAuth, inventoryBlankController.origin);

router.post("/inventory-job", isAuth, inventoryBlankController.job);

router.post("/inventory-total", isAuth, inventoryBlankController.postTotal);

router.get("/get-total/:countID", isAuth, inventoryBlankController.getTotal);

router.post(
  "/inventory-other-charges",
  isAuth,
  inventoryBlankController.otherCharges
);

router.post(
  "/inventory-additional-services",
  isAuth,
  inventoryBlankController.postAdditionalServices
);

router.get("/get-Addservices", isAuth, inventoryBlankController.getAdditional);

router.post("/bulky", isAuth, inventoryBlankController.bulkValues);

router.post(
  "/additional-services",
  inventoryBlankController.getAdditionalServices
);

module.exports = router;
