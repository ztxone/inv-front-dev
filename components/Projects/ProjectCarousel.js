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

export default function ProjectCarousel({ photos, poster, videofile }) {
  const [openZoom, setOpenZoom] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [current, setCurrent] = useState();

  const videoSlides = videofile.data ? videofile.data : [];
  const slides = photos ? [...videoSlides, ...photos] : [...videoSlides];

  console.log(slides, poster);

  return (
    <>
      <ImageZoomModal
        isOpen={openZoom}
        onClose={() => setOpenZoom((x) => !x)}
        current={current}
      />
      <div className="pt-2.5 pb-7 lg:container w-full mx-auto">
        <Swiper
          loop={true}
          slidesPerView={1}
          modules={[Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className="max-h-[530px]"
        >
          {/* {slides.map((photo, index) =>
            index === 0 ? (
              <SwiperSlide
                key={index}
                onClick={
                  photo?.videofile
                    ? null
                    : () => {
                        setOpenZoom(true);
                        setCurrent(photo.poster);
                      }
                }
              >
                <Video poster={photo.poster} videofile={photo?.videofile} />
              </SwiperSlide>
            ) : (
              <SwiperSlide
                key={index}
                onClick={() => {
                  setOpenZoom(true);
                  setCurrent(photo);
                }}
              >
                <Video poster={photo} videofile={null} />
              </SwiperSlide>
            )
          )} */}
        </Swiper>
        {/* {slides.length > 1 && (
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
        )} */}
      </div>
    </>
  );
}
