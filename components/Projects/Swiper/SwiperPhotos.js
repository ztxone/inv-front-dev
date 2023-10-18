import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Thumbs, Zoom } from "swiper/modules";

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
  const [showPagination, setShowPagination] = useState(true);

  const updatePaginationVisibility = () => {
    setShowPagination(window.innerWidth < 768);
  };

  useEffect(() => {
    updatePaginationVisibility();

    // Update visibility on window resize
    window.addEventListener("resize", updatePaginationVisibility);

    return () => {
      window.removeEventListener("resize", updatePaginationVisibility);
    };
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        //slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={10}
        className="mySwiper"
        autoHeight={true}
        loop
        //zoom
        modules={showPagination ? [Thumbs, Pagination] : [Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        pagination={showPagination ? true : null}
        breakpoints={{
          // Set slidesPerView to 1 for mobile screens
          768: {
            slidesPerView: 1.1,
          },
        }}
      >
        {slides.map((photo, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              setCurrent(photo);
              //setOpenZoom(true);
              //console.log(current);
            }}
            style={{ width: "100%", height: "90vh" }}
          >
            <Image
              fill={true}
              className="object-contain rounded-lr "
              alt={photo.attributes.name}
              src={getLink(photo)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {current && (
        <ModalImage isOpen={openZoom} onClose={() => setOpenZoom(false)}>
          <Image
            width="1200"
            height={800}
            className="relative max-w-[90vw] h-auto object-cover rounded-lr "
            alt={current.attributes.name ? current.attributes.name : ""}
            src={getLink(current)}
          />
        </ModalImage>
      )}

      {slides.length > 1 && !showPagination && (
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
