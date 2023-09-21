import { fetchAPI } from "./api";

export const sendCallOrder = async (data) => {
  const url = "/form-phones";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }), // Wrap the data in the "data" payload
  };

  try {
    await fetchAPI(url, {}, options);
  } catch (error) {
    console.error("Email sending error:", error);
  }
};
