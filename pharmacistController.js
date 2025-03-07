const Pharmacist = require("../models/Pharmacist");

exports.getAllPharmacists = async (req, res) => {
  try {
    const pharmacists = await Pharmacist.findAll();
    res.status(200).json(pharmacists);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
