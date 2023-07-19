import { getStrapiMediaCarousel } from "lib/mediaCarousel";
import Image from "next/image";

export default function ProjectSlide({ foto }) {
  return (
    <div className="w-[266px] h-[151px] ">
      <Image
        className="w-full rounded-lr h-full"
        src={getStrapiMediaCarousel(foto)}
        width="266"
        height="151"
        alt={foto.alternativeText}
      />
    </div>
  );
}
