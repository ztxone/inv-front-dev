import { getStrapiURL, fetchAPI } from "./api";

const sendBrief = async (data) => {
  const url = "/briefs";

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

export default sendBrief;
