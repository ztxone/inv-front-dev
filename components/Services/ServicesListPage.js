import ServiceItem from "@/components/ui/ServiceItem";
import useTranslation from "next-translate/useTranslation";
import Loading from "../ui/Loading";
import { useEffect, useState } from "react";
import { fetchAPI } from "lib/api";
import BriefCost from "../ui/BriefCost";

export default function ServicesListPage({ services }) {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const serviceRes = await fetchAPI("/categories", {
        fields: ["name", "slug", "text"],
        locale: locale,
        populate: ["image"],
        filters: {
          id: {
            $eq: 25,
          },
        },
      });

      setData(serviceRes.data[0]);
    }
    fetchData();
  }, [locale]);

  if (!data) {
    return <Loading />;
  }
  console.log(services);
  return (
    <section
      className="container pt-10 pb-11
    md:pb-[106px] md:pt-20 
    lg:pb-34"
    >
      <div className="lg:flex pb-10">
        {services.map((service, i) => (
          <ServiceItem
            key={i}
            title={service.attributes.name}
            subtitle=""
            link={`${i18n.lang}/services/${service.attributes.slug}`}
            descriptionItem1={service.attributes.text}
            image={service.attributes.image}
            centered={false}
          />
        ))}
      </div>
      <div className="lg:grid grid-cols-3">
        <ServiceItem
          title={data.attributes.name}
          subtitle=""
          link={`/services/${data.attributes.slug}`}
          descriptionItem1={data.attributes.text}
          image={data.attributes.image}
          centered={true}
        />
        <BriefCost title="Заполните бриф" />
      </div>
    </section>
  );
}
