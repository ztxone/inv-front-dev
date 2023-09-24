import { getStrapiMediaCarousel } from "lib/mediaCarousel";
import Image from "next/image";
import Video from "./Video";

export default function ProjectSlide({ photo, videofile = null }) {
  return (
    <div className="w-[266px] h-[151px] rounded-lr overflow-hidden">
      {videofile ? (
        <Video poster={photo} videofile={videofile} small={true} />
      ) : (
        <Image
          className="w-full h-full"
          width="266"
          alt={photo.attributes.name}
          height="151"
          src={getStrapiMediaCarousel(photo)}
        />
      )}
    </div>
  );
}
