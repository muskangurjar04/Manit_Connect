import { transporter } from "./Email.config.js";

export const SendVerificationCode=async(email,verificationCode)=>{
    try{
        const response = await transporter.sendMail({
    from: '"MANIT Connect" <bankeymuskan@gmail.com>', // sender address
    to: email,  // list of recipients
    subject: "MANIT Connect - Email Verification Code", // subject line
    text: "Verify your Email", // plain text body
    html: verificationCode, // HTML body
  });
  console.log('Email send successfully',response)
  }catch (error){
    console.log("========== EMAIL ERROR ==========");
    console.log(error.message);
    console.log(error);
}
}