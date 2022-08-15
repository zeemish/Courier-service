const express = require("express");

const router = express.Router();

const serviceController = require("../controllers/serviceOrder/service");

const isAuth = require("../middleware/isAuth.js");

router.post("/service-dest", isAuth, serviceController.destination);

router.post("/service-origin", isAuth, serviceController.origin);

router.post("/hourly-charges", serviceController.hourlyCharges);

router.post("/charges-cb", isAuth, serviceController.cbCharges);

router.post("/weight-charges", isAuth, serviceController.weightCharges);

router.post("/other-services", isAuth, serviceController.otherServices);

router.post("/agentDetails", isAuth, serviceController.agentDetails);

router.post("/officialSign", isAuth, serviceController.officialSign);

router.post("/payment", isAuth, serviceController.payment);

router.post("/service-header", isAuth, serviceController.headers);

router.post("/customer-initials", isAuth, serviceController.customerSignature);

router.post("/packing-material", isAuth, serviceController.packingMaterial);

router.post("/storage-charges", isAuth, serviceController.storageCharges);

router.post("/charges-summery", isAuth, serviceController.chargesSummery);

module.exports = router;
