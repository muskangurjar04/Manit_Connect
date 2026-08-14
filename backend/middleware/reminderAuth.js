const reminderAuth = (req, res, next) => {
  const secret = req.headers["x-reminder-secret"];

  if (!secret || secret !== process.env.REMINDER_SECRET) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized reminder request",
    });
  }

  next();
};

export default reminderAuth;