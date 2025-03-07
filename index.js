const sequelize = require("../config/database");
const User = require("./User");
const Admin = require("./Admin");
const Pharmacist = require("./Pharmacist");
const Drug = require("./Drug");
const Report = require("./Report");

// Sync function to apply models to the database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); // Set to true to drop and recreate tables
    console.log("✅ Database & tables synced successfully!");
  } catch (error) {
    console.error("❌ Error syncing database:", error);
  }
};

module.exports = { sequelize, User, Admin, Pharmacist, Drug, Report, syncDatabase };
