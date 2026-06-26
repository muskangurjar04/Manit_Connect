import { transporter } from "./Email.config.js";

export const SendVerificationCode=async(email,verificationCode)=>{
    try{
        const response = await transporter.sendMail({
    from: '"MuskanCodes" <bankeymuskan@gmail.com>', // sender address
    to: email,  // list of recipients
    subject: "Verify your Email", // subject line
    text: "Verify your Email", // plain text body
    html: verificationCode, // HTML body
  });
  console.log('Email send successfully',response)
    }catch (error){
console.log('Email error')
    }
}