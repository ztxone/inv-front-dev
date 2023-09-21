import { fetchAPI } from "lib/api";
import { createEmail } from "./createEmail";
var nodemailer = require("nodemailer");

const user = "invfront164@gmail.com";
// process.env.NEXT_EMAIL;

const pass = "eozhrawqisgqkrez";
//  process.env.NEXT_EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

export const sendMail = async (data) => {
  const response = await fetchAPI("/global", {
    fields: ["Email_forms"],
  });
  const result = await transporter.sendMail({
    subject: "Заявка",
    to: response.data.attributes.Email_forms,

    html: createEmail(data),
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }
  return result;
};
