const { DataTypes } = require("sequelize");

const sequelize = require("../util/db");

const GeneralAgreement = sequelize.define("generalAgreement", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jobNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  customerInitials1: {
    type: DataTypes.STRING,
    allowNull: true,
    default: "",
  },
  customerInitials2: {
    type: DataTypes.STRING,
    allowNull: true,
    default: "",
  },
  customerInitials3: {
    type: DataTypes.STRING,
    allowNull: true,
    default: "",
  },
  customerInitials4: {
    type: DataTypes.STRING,
    allowNull: true,
    default: "",
  },
  customerInitials5: {
    type: DataTypes.STRING,
    allowNull: true,
    default: "",
  },
  customerInitials6: {
    type: DataTypes.STRING,
    allowNull: true,
    default: "",
  },
  customerInitials7: {
    type: DataTypes.STRING,
    allowNull: true,
    default: "",
  },
  customerInitials8: {
    type: DataTypes.STRING,
    allowNull: true,
    default: "",
  },
  customerInitials9: {
    type: DataTypes.STRING,
    allowNull: true,
    default: "",
  },
  customerInitials10: {
    type: DataTypes.STRING,
    allowNull: true,
    default: "",
  },
  customerInitials11: {
    type: DataTypes.STRING,
    allowNull: true,
    default: "",
  },
  shipperSign: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    default: Date.now(),
  },
});

module.exports = GeneralAgreement;
