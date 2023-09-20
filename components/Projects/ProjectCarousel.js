import ProjectSlide from "./ProjectSlide";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Video from "./Video";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProjectCarousel({ photos, poster, videofile }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = photos
    ? [{ poster: poster.data, videofile: videofile.data }, ...photos]
    : [{ poster: poster.data, videofile: videofile.data }];
  return (
    <div className="pt-2.5 pb-7 lg:container w-full mx-auto">
      <Swiper
        loop={true}
        slidesPerView={1}
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="max-h-[530px]"
      >
        {slides.map((photo, index) =>
          index === 0 ? (
            <SwiperSlide key={index}>
              <Video
                poster={{ data: photo.poster }}
                videofile={{ data: photo.videofile }}
              />
            </SwiperSlide>
          ) : (
            <SwiperSlide key={index}>
              <Video poster={{ data: photo }} videofile={null} />
            </SwiperSlide>
          )
        )}
      </Swiper>
      <div className="2xl:pt-12 xl:pt-12 lg:pt-7 pt-2 z-5">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          scrollbar={{ draggable: true }}
          loop={true}
          onSwiper={setThumbsSwiper}
        >
          {slides.map((photo, index) =>
            index === 0 ? (
              <SwiperSlide key={index} style={{ flexShrink: 1 }}>
                <ProjectSlide
                  photo={photo.poster}
                  videofile={photo.videofile}
                />
              </SwiperSlide>
            ) : (
              <SwiperSlide key={index} style={{ flexShrink: 1 }}>
                <ProjectSlide photo={photo} />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
}
