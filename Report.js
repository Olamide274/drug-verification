const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Drug = require("./Drug");
const Pharmacist = require("./Pharmacist");
const Admin = require("./Admin");

const Report = sequelize.define("Report", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "reviewed", "removed"),
    defaultValue: "pending",
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
});

// Define relationships
Report.belongsTo(Drug, { foreignKey: "drug_id", as: "reportedDrug" });
Report.belongsTo(Pharmacist, { foreignKey: "pharmacist_id", as: "reportedByPharmacist" });
Report.belongsTo(Admin, { foreignKey: "admin_id", as: "reviewedByAdmin" });

module.exports = Report;
