const isAdmin = (req, res, next) => {
  if (req.user.role !== "Admin") {
    return res.status(403).json({
      success: false,
      message: "Access Denied. Admin only.",
    });
  }

  next();
};

export default isAdmin;