import Usermodel from "../models/User.js";
import bcryptjs from "bcryptjs";
export const createFirstAdmin = async (req, res) => {
  try {
    // Check if any admin already exists
    const adminExists = await Usermodel.findOne({ role: "Admin" });

    if (adminExists) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists.",
      });
    }

    const hashedPassword = await bcryptjs.hash("admin123", 10);

    const admin = await Usermodel.create({
      name: "Super Admin",
      email: "admin@manit.ac.in",
      password: hashedPassword,
      role: "Admin",
      isVerified: true,
      isActive: true,
    });

    return res.status(201).json({
      success: true,
      message: "First Admin Created Successfully",
      admin,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};





// ===============================
// Create User
// ===============================
export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Only these roles can be created by Admin
    const allowedRoles = [
      "Admin",
      "TPO Head",
      "TPO Volunteer",
      "TPO Faculty",
    ];

    if (!allowedRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role selected.",
      });
    }

    const existingUser = await Usermodel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists.",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = await Usermodel.create({
      name,
      email,
      password: hashedPassword,
      role,
      isVerified: true,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully.",
      user,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Dashboard Counts
// ===============================
export const getDashboard = async (req, res) => {
  try {

    const volunteers = await Usermodel.countDocuments({
      role: "TPO Volunteer",
    });

    const heads = await Usermodel.countDocuments({
      role: "TPO Head",
    });

    const faculty = await Usermodel.countDocuments({
      role: "TPO Faculty",
    });

    const admins = await Usermodel.countDocuments({
      role: "Admin",
    });

    return res.json({
      success: true,
      volunteers,
      heads,
      faculty,
      admins,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===============================
// Get All Users
// ===============================
export const getUsers = async (req, res) => {
  try {

   const users = await Usermodel
  .find({
    role: {
      $in: [
        "Admin",
        "TPO Head",
        "TPO Volunteer",
        "TPO Faculty",
      ],
    },
  })
  .select("-password")
  .sort({ createdAt: -1 });

    return res.json({
      success: true,
      users,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===============================
// Update User
// ===============================
export const updateUser = async (req, res) => {
  try {

    const user = await Usermodel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    ).select("-password");

    return res.json({
      success: true,
      message: "User updated successfully.",
      user,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ===============================
// Delete User
// ===============================
export const deleteUser = async (req, res) => {
  try {

    await Usermodel.findByIdAndDelete(req.params.id);

    return res.json({
      success: true,
      message: "User deleted successfully.",
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};