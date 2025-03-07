const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Pharmacist = require("./Pharmacist");
const Admin = require("./Admin");

const Drug = sequelize.define("Drug", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serial_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  qr_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiry_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  added_by: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
});

// Define relationships
Drug.belongsTo(Pharmacist, { foreignKey: "added_by", as: "addedByPharmacist" });
Drug.belongsTo(Admin, { foreignKey: "added_by", as: "addedByAdmin" });

module.exports = Drug;
