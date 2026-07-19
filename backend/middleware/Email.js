import { transporter } from "./Email.config.js";

export const SendVerificationCode = async (email, verificationCode) => {
  try {
    const response = await transporter.sendMail({
      from: '"MANIT Connect" <bankeymuskan@gmail.com>',
      to: email,
      subject: "MANIT Connect - Email Verification Code",

      html: `
        <h2>Welcome to MANIT Connect</h2>

        <p>Your verification code is:</p>

        <h1>${verificationCode}</h1>

        <p>This OTP is valid for 10 minutes.</p>
      `,
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};