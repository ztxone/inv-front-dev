import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Zoom } from "swiper/modules";

import { ImageZoomModal } from "../ImageZoomModal";
import Image from "next/image";
import "swiper/css";

import { getStrapiURL } from "lib/api";
import ModalImage from "@/components/ui/ModalImage";
import { getStrapiMedia } from "lib/media";

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
  const [openZoom, setOpenZoom] = useState(false);
  const [current, setCurrent] = useState();

  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={10}
        className="mySwiper"
        autoHeight={true}
        loop
        zoom
        modules={[Thumbs, Zoom]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        breakpoints={{
          // Set slidesPerView to 1 for mobile screens
          768: {
            slidesPerView: 1.3,
          },
        }}
      >
        {slides.map((photo, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              setCurrent(photo);
              setOpenZoom(true);
              console.log(current);
            }}
          >
            <div className=" h-[80vh] relative swiper-zoom-container">
              {/*  h-[566px]  */}
              <Image
                fill={true}
                className="object-cover min-w-20 min-h-fit rounded-lr "
                alt={photo.attributes.name}
                src={getLink(photo)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {current && (
        <ModalImage isOpen={openZoom} onClose={() => setOpenZoom(false)}>
          <Image
            width="1200"
            height={800}
            className="relative max-w-[90vw] h-auto object-cover rounded-lr "
            alt={current.attributes.name}
            src={getLink(current)}
          />
        </ModalImage>
      )}

      {slides.length > 1 && (
        <div className="2xl:pt-12 xl:pt-12 lg:pt-7 pt-2 z-5 lg:container w-full mx-auto">
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
                <div className="rounded-lr   w-[266px] overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    width="266"
                    height="151"
                    alt={photo.attributes.name}
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
