import { useEffect, useState } from "react";
import ServiceChildrenItem from "./ServicesChildrenItem";
import useTranslation from "next-translate/useTranslation";
import { fetchAPI } from "lib/api";
import Loading from "../ui/Loading";

export default function ServicesForCategory({ parent }) {
  const [data, setData] = useState();
  const i18n = useTranslation();
  const locale = i18n.lang;

  useEffect(() => {
    async function fetchData() {
      const servicesRes = await fetchAPI("/services", {
        locale: locale,
        fields: ["Title", "slug"],
        populate: ["categories", "Image"],
        filters: {
          categories: {
            id: {
              $eq: parent,
            },
          },
        },
        pagination: {
          start: 0,
          limit: 3,
        },
      });

      setData(servicesRes.data);
    }
    fetchData();
  }, [locale, parent]);

  if (!data) {
    return false;
  }

  //console.log(data);

  return (
    <div
      className="container
    md:flex flex-row md:overflow-hidden md:pb-5
    xl:overflow-visible"
    >
      {data[0] &&
        data.map((service, key) => (
          <ServiceChildrenItem
            key={key}
            serviceId={parent}
            title={service.attributes.Title}
            path={service.attributes.slug}
            image={service.attributes.Image}
          />
        ))}
    </div>
  );
}
