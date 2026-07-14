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

// Create Placement (Volunteer)
export const createPlacement = async (req, res) => {
  try {
    const {
      student,
      enrollmentNo,
      branch,
      company,
      jobRole,
      package: ctc,
      placementType,
      remarks,
      offerLetter,
    } = req.body;

    const placement = await Placement.create({
      student,
      enrollmentNo,
      branch,
      company,
      jobRole,
      package: ctc,
      placementType,
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

// Get Pending Placements
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
    const placement = await Placement.findById(req.params.id);

    if (!placement) {
      return res.status(404).json({
        success: false,
        message: "Placement not found",
      });
    }

    if (placement.status !== "Pending") {
      return res.status(400).json({
        success: false,
        message: "This record has already been processed.",
      });
    }

    const updatedPlacement = await Placement.findByIdAndUpdate(
      req.params.id,
      {
        status: "Verified",
      },
      { new: true }
    );

    return res.json({
      success: true,
      placement: updatedPlacement,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Reject Placement
export const rejectPlacement = async (req, res) => {
  try {
    const placement = await Placement.findById(req.params.id);

    if (!placement) {
      return res.status(404).json({
        success: false,
        message: "Placement not found",
      });
    }

    if (placement.status !== "Pending") {
      return res.status(400).json({
        success: false,
        message: "This record has already been processed.",
      });
    }

    const updatedPlacement = await Placement.findByIdAndUpdate(
      req.params.id,
      {
        status: "Rejected",
        rejectionReason: req.body.rejectionReason,
      },
      { new: true }
    );

    return res.json({
      success: true,
      placement: updatedPlacement,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};