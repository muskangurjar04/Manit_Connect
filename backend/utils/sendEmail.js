import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendVerificationEmail = async (email, token) => {
  const verificationUrl =
    `http://localhost:5000/api/auth/verify/${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your MANIT Connect Account",

    html: `
      <h2>Welcome to MANIT Connect</h2>

      <p>Click below to verify your email:</p>

      <a href="${verificationUrl}">
      Verify Email
      </a>
    `,
  });
};

export default sendVerificationEmail;