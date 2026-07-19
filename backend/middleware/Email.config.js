import nodemailer from 'nodemailer'

 export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: "bankeymuskan@gmail.com",
    pass: "rlzq lpxp oxov xcdx",
  },
});

const SendEmail=async()=>{
    try{
        const info = await transporter.sendMail({
    from: '"MANIT Connect" <bankeymuskan@gmail.com>', // sender address
    to: "muskanbankey78@gmail.com",  // list of recipients
    subject: "MANIT Connect - Email Verification Code", // subject line
    text: "Hello", // plain text body
    html: "<b>Hello world?</b>", // HTML body
  });
  console.log(info)
    }catch(error){
        console.log(error)
    }
}
SendEmail()