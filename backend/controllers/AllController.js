import Placement from "../models/Placement.js";
export const getAllPlacements = async (req, res) => {
  try {
    const placements = await Placement.find()
      .populate("student", "name email role")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: placements.length,
      placements,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};