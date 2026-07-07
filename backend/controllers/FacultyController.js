import Placement from "../models/Placement.js";

export const getFacultyAnalytics = async (req, res) => {
  try {

    const placements = await Placement.find({
      status: "Verified",
    }).populate("student", "name");

    const verifiedCount = placements.length;

    const rejectedCount = await Placement.countDocuments({
      status: "Rejected",
    });

    const highestPackage =
      placements.length > 0
        ? Math.max(...placements.map((p) => Number(p.package || 0)))
        : 0;

    const averagePackage =
      placements.length > 0
        ? (
            placements.reduce(
              (sum, p) => sum + Number(p.package || 0),
              0
            ) / placements.length
          ).toFixed(2)
        : 0;

    res.json({
      success: true,

      stats: {
        verifiedCount,
        rejectedCount,
        highestPackage,
        averagePackage,
      },

      students: placements,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};