import { useEffect, useState } from "react";
import ServiceChildrenItem from "./ServicesChildrenItem";
import useTranslation from "next-translate/useTranslation";
import { fetchAPI } from "lib/api";
import Loading from "../ui/Loading";

export default function ServicesChildren({ parent }) {
  const [data, setData] = useState();
  const i18n = useTranslation();
  const locale = i18n.lang;

  useEffect(() => {
    async function fetchData() {
      const servicesRes = await fetchAPI("/categories", {
        locale: locale,
        populate: ["category", "image"],
        filters: {
          category: {
            id: {
              $eq: parent,
            },
          },
        },
      });

      setData(servicesRes.data);
    }
    fetchData();
  }, [locale]);

  if (!data) {
    return <Loading />;
  }

  //console.log(data);

  return (
    <div className="container">
      {data[0] &&
        data.map((service, key) => (
          <ServiceChildrenItem
            title={service.attributes.name}
            path={service.attributes.slug}
            image={service.attributes.image}
          />
        ))}
      {/* <ServiceChildrenItem
        title="3D визуализация экстерьеров"
        path="/image/content/3d-service.png"
      />
      <ServiceChildrenItem
        title="3D визуализация интерьеров"
        path="/image/content/3d-service.png"
      />
      <ServiceChildrenItem
        title="Предметная 3D визуализация"
        path="/image/content/3d-service.png"
      /> */}
    </div>
  );
}
