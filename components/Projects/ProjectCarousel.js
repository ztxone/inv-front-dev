import ProjectSlide from "./ProjectSlide";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Video from "./Video";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ImageZoomModal } from "./ImageZoomModal";
import { SwiperVideo } from "./Swiper/SwiperVideo";
import { SwiperPhotos } from "./Swiper/SwiperPhotos";

export default function ProjectCarousel({ photos, poster, videoFiles }) {
  const [openZoom, setOpenZoom] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [current, setCurrent] = useState();

  return (
    <>
      <ImageZoomModal
        isOpen={openZoom}
        onClose={() => setOpenZoom((x) => !x)}
        current={current}
      />
      <div className="pt-2.5 pb-7 lg:container w-full mx-auto">
        {videoFiles?.data ? (
          <SwiperVideo videoSlides={videoFiles.data} poster={poster} />
        ) : (
          <SwiperPhotos poster={poster?.data} photos={photos} />
        )}
      </div>
    </>
  );
}
