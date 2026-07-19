import { BrevoClient } from "@getbrevo/brevo";

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY,
});

export const SendVerificationCode = async (email, verificationCode) => {
  try {
    const result = await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        name: "MANIT Connect",
        email: "bankeymuskan@gmail.com",
      },
      to: [
        {
          email,
        },
      ],
      subject: "MANIT Connect - Email Verification Code",
      htmlContent: `
        <h2>Welcome to MANIT Connect</h2>

        <p>Your verification code is:</p>

        <h1 style="font-size:32px;color:#2563eb;">
          ${verificationCode}
        </h1>

        <p>This OTP is valid for <b>10 minutes</b>.</p>

        <p>If you didn't request this code, please ignore this email.</p>

        <br>

        <b>MANIT Connect Team</b>
      `,
    });

    console.log("✅ Email sent successfully");
    console.log(result);

  } catch (error) {
    console.error("❌ Brevo Error");

    if (error.body) {
      console.error(error.body);
    } else {
      console.error(error);
    }

    throw error;
  }
};