import Placement from "../models/Placement.js";

import supabase from "../libs/supabase.js";

// ================================
// Student Submit Placement
// ================================
export const submitPlacement = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("USER:", req.user);
    console.log("FILE:", req.file);

    const {
      enrollmentNo,
      branch,
      company,
      jobRole,
      package: packageValue,
      placementType,
      placementMode,
      remarks,
    } = req.body;

       console.log(req.file);
       console.log("Buffer length:", req.file.buffer.length);
console.log("First 10 bytes:", req.file.buffer.slice(0, 10));
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Offer Letter PDF is required.",
      });
    }
    const fileName = `${Date.now()}-${req.file.originalname}`;

const { error } = await supabase.storage.from("offer_letter")
  .upload(fileName, req.file.buffer, {
    contentType: "application/pdf",
    upsert: false,
  });

if (error) {
  throw error;
}

const { data } = supabase.storage
  .from("offer_letter")
  .getPublicUrl(fileName);

const fileUrl = data.publicUrl;

    
    const placement = await Placement.create({
      student: req.user.id, // Login user
      enrollmentNo,
      branch,
      company,
      jobRole,
      package: packageValue,
      placementType,
      placementMode,
      remarks,
      offerLetter: fileUrl,
      status: "Pending",
    });
    console.log("Saved Placement:");
console.log(placement);
console.log("Offer Letter:", placement.offerLetter);


    return res.status(201).json({
      success: true,
      message: "Placement submitted successfully.",
      placement,
    });
  } catch (error) {
    console.log("Placement Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================================
// Volunteer Create Placement
// ================================
export const createPlacement = async (req, res) => {
  try {
    const {
      student,
      enrollmentNo,
      branch,
      company,
      jobRole,
      package: packageValue,
      placementType,
      placementMode,
      remarks,
      offerLetter,
    } = req.body;

    const placement = await Placement.create({
      student,
      enrollmentNo,
      branch,
      company,
      jobRole,
      package: packageValue,
      placementType,
      placementMode,
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

// ================================
// Pending Placements
// ================================
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

// ================================
// Verify Placement
// ================================
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

    placement.status = "Verified";
    placement.verifiedBy = req.user?.id || null;

    await placement.save();

    return res.status(200).json({
      success: true,
      message: "Placement Verified Successfully",
      placement,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================================
// Reject Placement
// ================================
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

    placement.status = "Rejected";
    placement.rejectionReason = req.body.rejectionReason;

    await placement.save();

    return res.status(200).json({
      success: true,
      message: "Placement Rejected",
      placement,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};