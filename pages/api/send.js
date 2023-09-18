import { createEmail } from "@/components/Brief/Email/createEmail";
import { sendMail } from "@/components/Brief/Email/nodemailer";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const response = await sendMail(req.body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  res.status(200).json(createEmail(req.body));
};
