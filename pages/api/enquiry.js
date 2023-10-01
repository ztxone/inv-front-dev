import { fetchAPI } from "lib/api";

const handler = async (req, res) => {
  const globalRes = await fetchAPI("/global", {
    populate: {
      defaultSeo: {
        populate: "*",
      },
    },
  });
  const secretKey = globalRes.data.attributes.CAPTCHA_SECRET_KEY;
  // process.env.CAPTCHA_SECRET_KEY;
  if (req.method === "POST") {
    try {
      const reCaptchaRes = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=${secretKey}&response=${req.body.gRecaptchaToken}`,
        }
      );
      const json = await reCaptchaRes.json();
      console.log(json, "Response from Google reCaptcha verification API");
      if (json?.score > 0.5) {
        // Save data to the database from here
        res.status(200).json({
          status: "success",
          message: "Enquiry submitted successfully",
        });
      } else {
        res.status(200).json({
          status: "failure",
          message: "Google ReCaptcha Failure",
        });
      }
    } catch (err) {
      res.status(405).json({
        status: "failure",
        message: "Error submitting the enquiry form",
      });
    }
  } else {
    res.status(405);
    res.end();
  }
};

export default handler;
