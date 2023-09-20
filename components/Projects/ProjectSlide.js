import { getStrapiMediaCarousel } from "lib/mediaCarousel";
import Image from "next/image";
import Video from "./Video";

export default function ProjectSlide({ photo, videofile = null }) {
  return (
    <div className="w-[266px] h-[151px] rounded-lr overflow-hidden">
      {videofile ? (
        <Video
          poster={{ data: photo }}
          videofile={{ data: videofile }}
          small={true}
        />
      ) : (
        <Image
          className="w-full h-full"
          src={getStrapiMediaCarousel(photo)}
          width="266"
          height="151"
          alt={photo.attributes.name}
        />
      )}
    </div>
  );
}
