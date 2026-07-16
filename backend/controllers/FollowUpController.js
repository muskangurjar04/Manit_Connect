import FollowUp from "../models/FollowUp.js";
import User from "../models/User.js";

export const createFollowUp = async (req, res) => {
  try {
    console.log("BODY RECEIVED:");
    console.log("REQ BODY:");
    console.log(req.body);
    console.log("REQ USER =", req.user);

    const {
      companyName,
      hrName,
      interactionType,
      status,
      notes,
      nextFollowUp,
    } = req.body;

    // Logged-in volunteer ka data nikalo
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Volunteer not found",
      });
    }

    const followUp = await FollowUp.create({
      volunteer: req.user.id,
      volunteerName: user.name, // Automatically save volunteer name
      companyName,
      hrName,
      interactionType,
      status,
      notes,
      nextFollowUp,
    });

    return res.status(201).json({
      success: true,
      message: "Follow-up saved successfully",
      followUp,
    });

  } catch (error) {
    console.error("FollowUp Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getDashboardStats = async (req, res) => {
  try {

    const totalContacted = await FollowUp.countDocuments();

    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const todayCalls = await FollowUp.countDocuments({
      interactionType: "Phone Call",
      createdAt: {
        $gte: todayStart,
        $lte: todayEnd,
      },
    });

    const pending = await FollowUp.countDocuments({
      status: "Waiting for Reply",
    });

    const conversions = await FollowUp.countDocuments({
      status: "Placement Confirmed",
    });

    res.json({
      success: true,
      totalContacted,
      todayCalls,
      pending,
      conversions,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyFollowUps = async (req, res) => {
  try {

    const followUps = await FollowUp.find({
      volunteer: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      followUps,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const getAllFollowUps = async (req, res) => {

  console.log("===== GET ALL FOLLOWUPS =====");
  console.log("USER:", req.user);

  try {
    const followUps = await FollowUp.find()
      .populate("volunteer", "name")
      .sort({ createdAt: -1 });

    console.log("Found:", followUps.length);

    res.status(200).json({
      success: true,
      followUps,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};