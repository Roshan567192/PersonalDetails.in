import PersonalDetails from "../models/PersonalDetails.js";

// ✅ Add new personal details
export const addPersonalDetails = async (req, res) => {
  try {
    const { fullName, gender, dateOfBirth } = req.body;

    // validation: legal age
    const dob = new Date(dateOfBirth);
    const age = new Date().getFullYear() - dob.getFullYear();
    if ((gender === "Male" && age < 21) || (gender === "Female" && age < 18)) {
      return res.status(400).json({ error: "Not eligible: Age requirement not met." });
    }

    const newDetails = new PersonalDetails(req.body);
    const saved = await newDetails.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ Get all details
export const getPersonalDetails = async (req, res) => {
  try {
    const details = await PersonalDetails.find();
    res.json(details);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
