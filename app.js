const express = require("express");
const sequelize = require("./util/db");
const bodyParser = require("body-parser");

// ---------------------------------- MODELS ---------------------------------
const User = require("./models/user");
const AdditionalServices = require("./models/InventoryBlank1/additionalServices");
const Bulky = require("./models/InventoryBlank1/Bulky");
const Destination = require("./models/InventoryBlank1/destination");
const Job = require("./models/InventoryBlank1/job");
const OtherCharges = require("./models/InventoryBlank1/otherCharges");
const Total = require("./models/InventoryBlank1/total");
const Origin = require("./models/InventoryBlank1/origin");

// ------------------------------- ROUTERS -------------------------------------
const authRoutes = require("./routers/auth");
const interstateRoute = require("./routers/interstate");
const sendMailRoute = require("./routers/sendEmail");
const orderFormRoute = require("./routers/orderForm");
const serviceRoute = require("./routers/service");
const receiptRoute = require("./routers/receipt");
const generalAgreementRoutes = require("./routers/generalAgreement");
const packingMaterialRoutes = require("./routers/packingMaterial");
const valuationSelectionRoutes = require("./routers/valuationSelection");
const inventoryBlankRoutes = require("./routers/inventoryBlank");
const ValuationSelection = require("./models/valuationSelection");
const Email = require("./models/emails");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  // res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // OR below LOC to set all headers
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "Hello from aaron App" });
});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

// ----------------- ROUTERS ---------------------
app.use("/auth", authRoutes);
app.use(inventoryBlankRoutes);
app.use(interstateRoute);
app.use(serviceRoute);
app.use(orderFormRoute);
app.use(sendMailRoute);
app.use(receiptRoute);
app.use(generalAgreementRoutes);
app.use(packingMaterialRoutes);
app.use(valuationSelectionRoutes);

// ------------------- Inventory Blank Relations-----------------
User.hasMany(AdditionalServices);
User.hasMany(Bulky);
Bulky.belongsTo(User);
User.hasMany(Destination);
User.hasMany(Origin);
User.hasMany(Job);
User.hasMany(OtherCharges);
User.hasMany(Total);
Total.belongsTo(User);

// --------------- Valuation Selection -----------------
User.hasMany(ValuationSelection);
User.hasMany(Email);

sequelize
  // .sync({ force: true })
  // .sync({ alter: true })
  .sync()
  .then((result) => {
    app.listen(8080);
  })
  .catch((error) => {
    console.log(error);
  });
