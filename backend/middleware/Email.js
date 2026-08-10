import axios from "axios";

export const SendVerificationCode = async (email, verificationCode) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "MANIT Connect",
          email: "bankeymuskan@gmail.com",
        },

        to: [
          {
            email: email,
          },
        ],

        subject: "MANIT Connect - Email Verification Code",

        htmlContent: `
          <h2>Welcome to MANIT Connect</h2>

          <p>Your verification code is:</p>

          <h1>${verificationCode}</h1>

          <p>This OTP is valid for 10 minutes.</p>
        `,
      },
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": process.env.BREVO_API_KEY,
        },
      }
    );

    console.log("Email Sent");
    console.log(response.data);

  } catch (error) {

    console.log(error.response?.data || error.message);

    throw error;

  }
};

export const SendFollowUpReminder = async (
  email,
  companyName,
  hrName,
  nextFollowUp
) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "MANIT Connect",
          email: "bankeymuskan@gmail.com",
        },

        to: [
          {
            email: email,
          },
        ],

        subject: "MANIT Connect - Follow-Up Reminder",

        htmlContent: `
          <h2> Follow-Up Reminder </h2>

          <p>Hello,</p>

          <p>This is a reminder that you have a follow-up scheduled today.</p>

          <p>
            <strong>Company:</strong> ${companyName}
          </p>

          <p>
            <strong>HR / Recruiter:</strong> ${hrName}
          </p>

          <p>
            <strong>Follow-Up Date:</strong> ${new Date(
              nextFollowUp
            ).toLocaleDateString()}
          </p>

          <p>Please contact the company as planned.</p>

          <br />

          <p>Regards,<br />
          <strong>MANIT Connect</strong></p>
        `,
      },
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": process.env.BREVO_API_KEY,
        },
      }
    );

    console.log("Follow-up reminder email sent:", response.data);
  } catch (error) {
    console.log(
      "Reminder Email Error:",
      error.response?.data || error.message
    );

    throw error;
  }
};