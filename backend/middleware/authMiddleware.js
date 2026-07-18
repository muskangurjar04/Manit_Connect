import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    console.log("========== AUTH MIDDLEWARE ==========");

    // Print Authorization Header
    console.log("Authorization Header:", req.headers.authorization);

    const token = req.headers.authorization?.split(" ")[1];

    // Print Extracted Token
    console.log("Extracted Token:", token);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. No token provided.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Print Decoded User
    console.log("Decoded User:", decoded);

    req.user = decoded;

    next();
  } catch (error) {
    console.log("========== AUTH ERROR ==========");
    console.error(error);

    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};

export default authMiddleware;