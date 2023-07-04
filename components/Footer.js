import Form from "./ui/Form";
import NavFooter from "./ui/NavFooter";
import Contact from "./ui/Contact";
import Copyright from "./ui/Copyright";
import {fetchAPI} from "lib/api";
import useTranslation from "next-translate/useTranslation";
import {useEffect, useState} from "react";
import Logo from './ui/Logo';

export default function Footer({variant}) {
  const [data, setData]=useState();
  const [menu, setMenu]=useState([]);
  const i18n=useTranslation();
  const locale=i18n.lang;

  useEffect(() => {
    async function fetchData() {
      const contactRes=await fetchAPI("/contact", {
        fields: ["Title", "Address", "Phone", "Email"],
        locale: locale,
        populate: "*",
      });
      const menuRes=await fetchAPI("/navigation/render/2", {
        fields: ["title", "path"],
        locale: locale,
      });
      setData(contactRes.data);
      setMenu(menuRes);
    }
    fetchData();
  }, [locale]);

  return (
    <footer
      className={`${variant==="black"
        ? "bg-black text-white"
        :"bg-whisper text-black-russian"
        } mx-auto pb-[38px] lg:px-10.5 text-inherit`}
    >
      <div
        className="lg:max-w-[1746px] xl:flex 
      flex-wrap xl:justify-end xl:items-start lg:pt-20
      lg:mx-auto"
      >
        <Form />
        <NavFooter menu={menu} />
        <Contact contact={data} />
        <Copyright />
      </div>
    </footer>
  );
}
