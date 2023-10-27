import { fetchAPI } from "lib/api";
import { CreateEmail } from "./createEmail";
import useTranslation from "next-translate/useTranslation";
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

export const SendMail = async (data) => {
  const response = await fetchAPI("/global", {
    fields: ["Email_forms"],
  });
  const { t } = useTranslation("common");
  //console.log(data);
  const { formName } = JSON.parse(data);

  const result = await transporter.sendMail({
    subject: formName,
    to: response.data.attributes.Email_forms,

    html: CreateEmail(data),
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }
  return result;
};
