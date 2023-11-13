import { getStrapiMediaCarousel } from "lib/mediaCarousel";
import Image from "next/image";

export default function BigImageSlide({ photo }) {
  return (
    <div className="w-full pb-2 relative mt-2.5">
      <Image
        className="w-full rounded-lr h-full"
        src={getStrapiMediaCarousel(photo)}
        width="266"
        height="151"
        alt={photo.attributes.name}
        q={100}
      />
    </div>
  );
}
