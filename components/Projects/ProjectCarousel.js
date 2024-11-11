import { SwiperVideo } from "./Swiper/SwiperVideo";
// import { SwiperPhotos } from "./Swiper/SwiperPhotos";
import { SwiperMedia } from "./Swiper/SwiperMedia";

export default function ProjectCarousel({
  photos,
  videoFiles,
  poster,
}) {
  
  return (
    <>
      <div className="pt-2.5 pb-7 w-full mx-auto">
        {videoFiles?.data ? (
          <SwiperVideo videoSlides={videoFiles.data} poster={poster} />
        ) : (
          <SwiperMedia
            poster={poster?.data}
            photos={photos}
          />
        )}
      </div>
    </>
  );
}
