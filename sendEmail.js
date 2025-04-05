import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
const mailOptions = {
  from: `"test" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER, // send to yourself
  subject: "Zoho Self-Test",
  text: "This is a test email to myself!",
  replyTo: process.env.EMAIL_USER,
};

transporter
  .sendMail(mailOptions)
  .then((info) => console.log("Email sent:", info.response))
  .catch((error) => console.error("Error:", error));
