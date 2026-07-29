import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendVerificationCode = async (email, verificationCode) => {
  try {
    const data = await resend.emails.send({
      from: "MANIT Connect <onboarding@resend.dev>",
      to: email,
      subject: "MANIT Connect - Email Verification Code",
      html: `
        <h2>Welcome to MANIT Connect</h2>

        <p>Your verification code is:</p>

        <h1>${verificationCode}</h1>

        <p>This OTP is valid for 10 minutes.</p>
      `,
    });

    console.log("Email Sent");
    console.log(data);

  } catch (error) {
    console.error("RESEND ERROR:");
    console.error(error);

    throw error;
  }
};