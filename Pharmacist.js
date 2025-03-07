const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Admin = require("./Admin");

const Pharmacist = sequelize.define("Pharmacist", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
});

Pharmacist.belongsTo(Admin, { foreignKey: "admin_id", as: "addedByAdmin" });

module.exports = Pharmacist;
