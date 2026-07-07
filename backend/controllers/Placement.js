import Placement from "../models/Placement.js";

export const submitPlacement = async (req, res) => {
  try {
    const placement = new Placement({
      ...req.body,
      offerLetter: req.file?.filename,
    });

    await placement.save();

    res.status(201).json({
      success: true,
      message: "Placement submitted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};