import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Thumbs, Pagination } from "swiper/modules";
import { VideoPlayer } from "../VideoPlayer";
// import 'swiper/css/pagination';
export const SwiperVideo = ({ videoSlides, poster }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showPagination, setShowPagination] = useState(true);
  const [stopVideo, setStopVideo] = useState(true);

  useEffect(() => {
    const updatePaginationVisibility = () => {
      if (window?.innerWidth) setShowPagination(window.innerWidth > 768);
    };
    updatePaginationVisibility();
    window.addEventListener("resize", updatePaginationVisibility);

    return () => {
      window.removeEventListener("resize", updatePaginationVisibility);
    };
  }, []);

  return (
    <div className="container">
      <Swiper
        onSlideChange={() => {
          setStopVideo((x) => !x);
        }}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        modules={[Thumbs, Pagination]}
        pagination={!showPagination ? { clickable: true } : false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {videoSlides.map((video, index) => (
          <SwiperSlide key={index}>
            <VideoPlayer
              poster={thumbsSwiper ? null : poster?.data}
              videofile={video}
              stop={stopVideo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {videoSlides.length > 1 && (
        <div
          className={`2xl:pt-12 xl:pt-12 lg:pt-7 pt-2 z-5 ${
            showPagination ? "w-[100%]" : "w-0 h-0"
          } mx-auto`}
        >
          <Swiper
            className="videoGalery"
            slidesPerView={2}
            breakpoints={{
              768: {
                spaceBetween: 30,
                slidesPerView: 2,
              },
              992: {
                slidesPerView: videoSlides.length < 3 ? 2 : 3,
              },
            }}
            spaceBetween={30}
            scrollbar={{ draggable: true }}
            loop={true}
            onSwiper={setThumbsSwiper}
            watchSlidesProgress={true}
          >
            {videoSlides.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lr overflow-hidden">
                  <VideoPlayer poster={null} videofile={video} small={true} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};
