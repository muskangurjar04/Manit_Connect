import Usermodel from "../models/User.js";
import bcryptjs from "bcryptjs";

export const createAdmin = async (req, res) => {
  try {
    // Check if admin already exists
    const existingAdmin = await Usermodel.findOne({
      role: "Admin",
    });

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists",
      });
    }

    // Hash Password
    const hashedPassword = await bcryptjs.hash("admin123", 10);

    // Create Admin
    const admin = await Usermodel.create({
      name: "Super Admin",
      email: "admin@manit.ac.in",
      password: hashedPassword,
      role: "Admin",
      isVerified: true,
    });

    return res.status(201).json({
      success: true,
      message: "Admin Created Successfully",
      admin,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
export const createFaculty = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await Usermodel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const faculty = await Usermodel.create({
      name,
      email,
      password: hashedPassword,
      role: "TPO Faculty",
      isVerified: true,
    });

    return res.status(201).json({
      success: true,
      message: "Faculty Created Successfully",
      faculty,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
export const createVolunteer = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await Usermodel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const volunteer = await Usermodel.create({
      name,
      email,
      password: hashedPassword,
      role: "TPO Volunteer",
      isVerified: true,
    });

    return res.status(201).json({
      success: true,
      message: "Volunteer Created Successfully",
      volunteer,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};