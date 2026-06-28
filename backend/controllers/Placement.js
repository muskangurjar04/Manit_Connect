import Placement from "../models/Placement.js";

export const createPlacement = async (req, res) => {
  try {
    const {
      student,
    //   studentName,
      enrollmentNo,
      branch,
      company,
      jobRole,
      package: ctc,
      placementType,
      joiningDate,
      remarks,
      offerLetter,
    } = req.body;

    const placement = await Placement.create({
      student,
    //   studentName,
      enrollmentNo,
      branch,
      company,
      jobRole,
      package: ctc,
      placementType,
      joiningDate,
      remarks,
      offerLetter,
      status: "Pending",
    });

    return res.status(201).json({
      success: true,
      message: "Placement Record Submitted Successfully",
      placement,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getPendingPlacements = async (req, res) => {
  try {
    const placements = await Placement.find({
      status: "Pending",
    })
      .populate("student", "name email role")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: placements.length,
      placements,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Verify Placement

export const verifyPlacement = async (req, res) => {
  try {

    const placement = await Placement.findByIdAndUpdate(
      req.params.id,
      {
        status: "Verified"
      },
      { new: true }
    );

    res.json({
      success: true,
      placement
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};


// Reject Placement

export const rejectPlacement = async (req, res) => {
  try {

    const placement = await Placement.findByIdAndUpdate(
      req.params.id,
      {
        status: "Rejected"
      },
      { new: true }
    );

    res.json({
      success: true,
      placement
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};