import Form from "./ui/Form";
import NavFooter from "./ui/NavFooter";
import Contact from "./ui/Contact";
import Copyright from "./ui/Copyright";
import { fetchAPI } from "lib/api";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import Line from "./ui/Line";

export default function Footer({ variant, pillowColor = "dark" }) {
  const [data, setData] = useState();
  const [menu, setMenu] = useState([]);
  const i18n = useTranslation();
  const locale = i18n.lang;

  useEffect(() => {
    async function fetchData() {
      const contactRes = await fetchAPI("/contact", {
        fields: ["Title", "Address", "Phone", "Email"],
        locale: locale,
        populate: "*",
      });

      const menuRes = await fetchAPI("/navigation/render/2", {
        fields: ["title", "path"],
        locale: locale,
      });
      setData(contactRes.data);
      setMenu(menuRes);
    }
    fetchData();
  }, [locale]);

  const colorLine = variant === "black" ? "eclipse" : "grey";
  const colorSocials = variant === "black" ? "black" : "white";
  const footerClass =
    variant === "black"
      ? "bg-black text-white"
      : "bg-whisper text-black-russian";

  return (
    <footer
      className={`${footerClass} mx-auto pb-[38px] text-inherit shrink-0 w-full`}
    >
      <div
        className="container xl:flex 
      flex-wrap xl:justify-end xl:items-start lg:pt-10
      lg:mx-auto lg:pb-18"
      >
        <Form pillowColor={pillowColor} />
        <NavFooter menu={menu} />
        <Contact contact={data} colorSocials={colorSocials} />
      </div>
      <Line variantColor={colorLine} />
      <Copyright />
    </footer>
  );
}
