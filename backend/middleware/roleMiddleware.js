export const isAdmin = (req, res, next) => {
  if (req.user.role !== "Admin") {
    return res.status(403).json({
      success: false,
      message: "Access Denied",
    });
  }

  next();
};

export const isFaculty = (req, res, next) => {
  if (req.user.role !== "TPO Faculty") {
    return res.status(403).json({
      success: false,
      message: "Access Denied",
    });
  }

  next();
};

export const isVolunteer = (req, res, next) => {
  if (req.user.role !== "TPO Volunteer") {
    return res.status(403).json({
      success: false,
      message: "Access Denied",
    });
  }

  next();
};

export const isStudent = (req, res, next) => {
  if (req.user.role !== "Student") {
    return res.status(403).json({
      success: false,
      message: "Access Denied",
    });
  }

  next();
};