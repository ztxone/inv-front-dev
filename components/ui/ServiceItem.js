import TitleH3 from "./TitleH3";
import { getStrapiMedia } from "lib/media";
import Image from "next/image";
import Link from "next/link";
import DescriptionServiceItem from "./DescriptionServiceItem";

export default function ServiceItem({
  title,
  subtitle,
  textPart1 = "",
  textPart2 = "",
  textPart3 = "",
  textPart4 = "",
  link,
  centered = false,
  image = "",
}) {
  return (
    <div
      className={`w-full h-[600px] mb-2.5 rounded-5xl relative
    md:mb-5
    lg:mb-0 lg:mr-7 lg:last-of-type:mr-0`}
    >
      <Link href={link} className="flex h-full rounded-5xl">
        {/* <div className="bg-nero3 w-full h-full z-10 p-9 rounded-5xl"> */}
        <div className="w-full h-full z-10 p-9 rounded-5xl">
          <TitleH3 text={title} subtext={subtitle} />
          <DescriptionServiceItem
            textPart1={textPart1}
            textPart2={textPart2}
            textPart3={textPart3}
            textPart4={textPart4}
          />
        </div>
        {image && (
          <div
            className="absolute top-0 bottom-0 left-0 right-0 
      lg:max-w-full lg:min-w-fit"
          >
            <img
              src={getStrapiMedia(image)}
              alt={title}
              width="398"
              height="600"
              priority
              //   quality={100}
              loading="lazy"
              //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover w-full h-full rounded-5xl ${
                centered ? "object-center" : "object-left-bottom"
              }`}
            />
          </div>
        )}
      </Link>
    </div>
  );
}
