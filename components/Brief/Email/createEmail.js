import useTranslation from "next-translate/useTranslation";

export const CreateEmail = (data) => {
  const emailData = JSON.parse(data);
  const { t } = useTranslation("common");

  const email = `
  <body >
    ${Object.entries(emailData)
      .map(([key, value]) =>
        key === "categories"
          ? `<p>
                ${t(`sendForm.${key}`)}: <span>${value.attributes.name}</span>
              </p>`
          : `<p>
                ${t(`sendForm.${key}`)}: <span>${value}</span>
              </p>`
      )
      .join("")}

  </body>
  `;

  return email;
};
