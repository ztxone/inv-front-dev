import PillowLink from "./PillowLink";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import Loading from "../ui/Loading";
import { fetchAPI } from "lib/api";

export default function Order() {
  const [data, setData] = useState();
  const i18n = useTranslation();
  const locale = i18n.lang;

  useEffect(() => {
    async function fetchData() {
      const contactRes = await fetchAPI("/contact", {
        fields: ["Phone", "PhoneLink"],
        locale: locale,
      });

      setData(contactRes.data.attributes);
    }
    fetchData();
  }, [locale]);

  //console.log(data);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="hidden md:flex items-center">
      <a
        href={`tel:${data.PhoneLink}`}
        className="p-2.5 mr-9 tracking-tight  hover:text-suva-grey"
      >
        {data.Phone}
      </a>
      <PillowLink text="Отправить заявку" link="#" variant="white" />
    </div>
  );
}
