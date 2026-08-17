import cron from "node-cron";
import FollowUp from "../models/FollowUp.js";
import User from "../models/User.js";
import { SendFollowUpReminder } from "../middleware/Email.js";

export const sendTodayFollowUpReminders = async () => {
  console.log("⏰ Follow-up reminder job started");

  try {
    const now = new Date();

const istDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Kolkata",
}).format(now);

const startOfDay = new Date(`${istDate}T00:00:00+05:30`);
const endOfDay = new Date(`${istDate}T23:59:59.999+05:30`);

  console.log("🇮🇳 IST DATE:", istDate);
console.log("START:", startOfDay.toISOString());
console.log("END:", endOfDay.toISOString());

    const followUps = await FollowUp.find({
      nextFollowUp: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
      reminderSent: false,
    });

 console.log(`📋 Today's follow-ups: ${followUps.length}`);



    for (const followUp of followUps) {
      const user = await User.findById(followUp.volunteer);

      if (!user || !user.email) {
        console.log(
          `⚠️ Email not found for follow-up: ${followUp._id}`
        );
        continue;
      }

      await SendFollowUpReminder(
        user.email,
        followUp.companyName,
        followUp.hrName,
        followUp.nextFollowUp
      );

      await FollowUp.findByIdAndUpdate(followUp._id, {
        reminderSent: true,
      });

      console.log(
        `📧 Reminder sent to ${user.email} for ${followUp.companyName}`
      );
    }

    return {
      success: true,
      count: followUps.length,
    };
  } catch (error) {
    console.error("❌ Reminder job error:", error);
    throw error;
  }
};

// // Local cron — 9:00 AM IST
// cron.schedule(
//   "0 9 * * *",
//   async () => {
//     await sendTodayFollowUpReminders();
//   },
//   {
//     timezone: "Asia/Kolkata",
//   }
// );