const { DataTypes } = require("sequelize");

const sequelize = require("../util/db");

const Email = sequelize.define("email", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  senderEmail: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  },
  recieverEmail: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cc: {
    type: DataTypes.STRING,
    allowNull: true,
    default: "",
  },
  bcc: {
    type: DataTypes.STRING,
    allowNull: true,
    default: "",
  },
});

module.exports = Email;
