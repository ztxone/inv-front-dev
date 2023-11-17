import Image from "next/image";
import PillowLink from "../ui/PillowLink";
import { getStrapiMedia } from "lib/media";
import Link from "next/link";

export default function ServicesChildrenItem({
  title,
  image,
  pathCategory,
  pathDirection = "",
  serviceId,
}) {
  const linkDirection = `${
    pathDirection !== ""
      ? `/brief?categoryId=${pathCategory}&directionId=${pathDirection}`
      : `/brief?categoryId=${pathCategory}`
  }`;
  return (
    <div
      className="bg-white pt-9 rounded-5xl mb-10 last:mb-0 relative
    md:mb-0 md:w-[562px] md:shrink-0 md:mr-5 md:last:mr-0
    xl:shrink flex flex-col justify-between"
    >
      <h3
        className="text-3xl px-9 pb-12
      "
      >
        {title}
      </h3>
      {image && (
        <img
          className="rounded-b-5xl w-full 
          md:aspect-[562/313]"
          src={getStrapiMedia(image)}
          width="398"
          height="313"
          alt={title}
          //   q={100}
          loading="lazy"
        />
      )}
      <div className="absolute bottom-9 left-9">
        <PillowLink
          text="Заказать"
          link={linkDirection}
          variant="white"
          variantSvg="blueClassesSvg"
        />
      </div>
    </div>
  );
}
