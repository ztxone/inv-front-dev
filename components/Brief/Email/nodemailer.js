import { createEmail } from "./createEmail";
var nodemailer = require("nodemailer");

const user = process.env.NEXT_EMAIL;
const pass = process.env.NEXT_EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

export const sendMail = async (data) => {
  const result = await transporter.sendMail({
    subject: "Заявка",
    to: "madjok87@icloud.com",
    html: createEmail(data),
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }
  return result;
};
