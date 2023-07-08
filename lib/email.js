import { getStrapiURL, fetchAPI } from "./api";

const sendEmail = async (data) => {
  const url = "/zayavka-forms";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }), // Wrap the data in the "data" payload
  };

  try {
    await fetchAPI(url, {}, options);
    //console.log("Email sent successfully!");
  } catch (error) {
    //console.error("Email sending error:", error);
  }
};

export default sendEmail;
