const Verification = require("../models/Verification");

exports.verifyDrug = async (req, res) => {
  try {
    const { drugId, pharmacistId, status } = req.body;

    const verification = await Verification.create({
      drugId,
      pharmacistId,
      status,
    });

    res.status(201).json({ message: "Drug verification recorded", verification });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
