const Drug = require("../models/Drug");

// ✅ Make sure these functions exist
exports.createDrug = async (req, res) => {
  try {
    const { name, serial_number, qr_code, manufacturer, expiry_date, added_by } = req.body;
    const drug = await Drug.create({ name, serial_number, qr_code, manufacturer, expiry_date, added_by });
    res.status(201).json({ message: "Drug added successfully", drug });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getAllDrugs = async (req, res) => {
  try {
    const drugs = await Drug.findAll();
    res.status(200).json(drugs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getDrugById = async (req, res) => {
  try {
    const drug = await Drug.findByPk(req.params.id);
    if (!drug) return res.status(404).json({ message: "Drug not found" });
    res.status(200).json(drug);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.updateDrug = async (req, res) => {
  try {
    const { name, manufacturer, expiry_date } = req.body;
    const drug = await Drug.findByPk(req.params.id);
    if (!drug) return res.status(404).json({ message: "Drug not found" });

    await drug.update({ name, manufacturer, expiry_date });
    res.status(200).json({ message: "Drug updated successfully", drug });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.deleteDrug = async (req, res) => {
  try {
    const drug = await Drug.findByPk(req.params.id);
    if (!drug) return res.status(404).json({ message: "Drug not found" });

    await drug.destroy();
    res.status(200).json({ message: "Drug deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
