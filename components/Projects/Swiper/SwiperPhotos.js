import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import ProjectSlide from "../ProjectSlide";
import Image from "next/image";
import "swiper/css";
import { getStrapiMediaCarousel } from "lib/mediaCarousel";
import { getStrapiURL } from "lib/api";
export function getLink(media) {
  try {
    const { url } = media.attributes;
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return imageUrl;
  } catch (error) {
    return undefined;
  }
}

export const SwiperPhotos = ({ poster, photos }) => {
  const photoSlides = photos || [];
  const slides = poster ? [poster, ...photoSlides] : photoSlides;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        className="relative"
        loop={true}
        slidesPerView={1}
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {slides.map((photo, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lr overflow-hidden max-h-[566px] w-[100wh] h-[566px] relative">
              <Image
                fill={true}
                className="object-cover min-w-20 min-h-fit"
                alt={photo.attributes.name}
                src={getLink(photo)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {slides.length > 1 && (
        <div className="2xl:pt-12 xl:pt-12 lg:pt-7 pt-2 z-5">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            breakpoints={{
              560: {
                spaceBetween: 30,
              },
            }}
            scrollbar={{ draggable: true }}
            loop={true}
            onSwiper={setThumbsSwiper}
          >
            {slides.map((photo, index) => (
              <SwiperSlide key={index} style={{ flexShrink: 1 }}>
                <div className="rounded-lr  h-[151px] w-[266px] overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    width="266"
                    alt={photo.attributes.name}
                    height="151"
                    src={getLink(photo)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};
