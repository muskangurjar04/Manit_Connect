import FollowUp from "../models/FollowUp.js";

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

    const followUp = await FollowUp.create({
      volunteer: req.body.volunteer,
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