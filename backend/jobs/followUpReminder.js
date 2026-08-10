import cron from "node-cron";
import FollowUp from "../models/FollowUp.js";
import User from "../models/User.js";
import { SendFollowUpReminder } from "../middleware/Email.js";

cron.schedule("0 9 * * *", async () => {
  console.log("⏰ Follow-up reminder job started");

  try {
    const now = new Date();

    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);

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

  } catch (error) {
    console.error("❌ Reminder job error:", error);
  }
},
{
    timezone: "Asia/Kolkata",
}
);