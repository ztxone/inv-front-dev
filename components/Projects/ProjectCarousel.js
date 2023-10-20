import { SwiperVideo } from "./Swiper/SwiperVideo";
import { SwiperPhotos } from "./Swiper/SwiperPhotos";

export default function ProjectCarousel({ photos, poster, videoFiles }) {
  console.log( photos, poster, videoFiles);
  return (
    <>
      <div className="pt-2.5 pb-7 w-full mx-auto">
        {videoFiles?.data ? (
          <SwiperVideo videoSlides={videoFiles.data} poster={poster} />
        ) : (
          <SwiperPhotos poster={poster?.data} photos={photos} />
        )}
      </div>
    </>
  );
}
