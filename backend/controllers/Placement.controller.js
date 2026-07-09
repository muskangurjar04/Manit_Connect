import Placement from "../models/Placement.js";

export const submitPlacement = async (req, res) => {
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
    } = req.body;

    // PDF upload hua ya nahi
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Offer Letter PDF is required.",
      });
    }
    

    const placement = new Placement({
  student :"6a439456ae03a201eb89483c", // Temporary ObjectId
  enrollmentNo,
  branch,
  company,
  jobRole,
  package: packageValue,
  placementType,
  remarks,
  offerLetter: req.file.path, // Store the filename of the uploaded PDF
});

    await placement.save();

    res.status(201).json({
      success: true,
      message: "Placement submitted successfully.",
      data: placement,
    });

  } catch (error) {
    console.error("Placement Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};