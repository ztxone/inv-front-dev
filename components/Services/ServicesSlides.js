import Tag from "@/components/ui/Tag";
import ServicesSlidesButton from "./ServicesSlidesButton";
import ServicesSlidesItem from "./ServicesSlidesItem";
import { fetchAPI } from "lib/api";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import Loading from "../ui/Loading";
import { getStrapiMedia } from "lib/media";
import Image from "next/image";

export default function ServicesSlides({ from = "" }) {
  const [data, setData] = useState();
  const i18n = useTranslation();
  const locale = i18n.lang;

  useEffect(() => {
    async function fetchData() {
      const slideRes = await fetchAPI("/categories", {
        filters: {
          ShowAsSlide: true,
        },
        fields: ["name", "slug"],
        locale: locale,
        populate: {
          Slides: {
            sort: ["SlidePosition:asc"],
            populate: "*",
          },
        },
      });

      setData(slideRes.data);
    }
    fetchData();
  }, [locale]);

  if (!data) {
    return <Loading />;
  }

  return (
    <div
      className={`flex flex-col gap-2.5 py-6 md:flex-row md:overflow-hidden 
	lg:order-3 lg:w-full ${from === "About" && "contRightMargin"} `}
    >
      {data.map((item) => (
        <ServicesSlidesItem
          key={item.id}
          background={getStrapiMedia(item.attributes.Slides.BackgroundImage)}
        >
          <Tag
            text={item.attributes.Slides.TypeofDocument}
            variant={item.attributes.Slides.BlackTagBg ? "black" : "white"}
          />
          <h3
            className={`text-xl tracking-tight text-${
              item.attributes.Slides.BlackTagBg ? "black" : "white"
            } mt-5`}
          >
            {item.attributes.name}
          </h3>
          <ServicesSlidesButton
            text={item.attributes.Slides.DocumentTextForLink}
            link={getStrapiMedia(item.attributes.Slides.Document)}
            variant={item.attributes.Slides.BlackTagBg ? "black" : "white"}
          >
            <Image
              src={getStrapiMedia(item.attributes.Slides.SlidesIconLink)}
              width="37"
              height="37"
              alt=""
              q={100}
            />
          </ServicesSlidesButton>
        </ServicesSlidesItem>
      ))}
    </div>
  );
}
