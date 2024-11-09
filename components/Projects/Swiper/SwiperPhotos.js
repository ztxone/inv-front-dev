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

export const SwiperPhotos = ({ poster, photos, verticalPhotos = false }) => {
  const photoSlides = photos || [];
  //const slides = poster ? [poster, ...photoSlides] : photoSlides;
  const slides = photoSlides;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [openZoom, setOpenZoom] = useState(false);
  const [current, setCurrent] = useState();
  const [showPagination, setShowPagination] = useState(true);
  let [loaded, setLoaded] = useState(false)
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
  const slidesCount = verticalPhotos ? 1.8 : 1.1;
  //This is for Mobile screens
  const renderSwiperWithPagination = () => {
    return (
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={10}
        className="mySwiper"
        autoHeight={true}
        // lazy={true}
        loop
        modules={[Thumbs, Pagination]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        pagination={showPagination ? { clickable: true } : null}
        breakpoints={{
          768: {
            slidesPerView: slidesCount,
          },
        }}
      >
        {slides.map((photo, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              setCurrent(photo);
            }}
          >
            <div className="h-auto min-h-[250px]">
            <Image
                className={`w-full h-full obj rounded-l15 object-cover`}
                style={{
                  filter: !loaded ? "blur(70px)" : "none",
                  transition: "filter 0.2s ease-out",
                }}
                src={getLink(photo)}
                placeholder="blur"
                blurDataURL={getLink(photo)}
                fill
                alt="Project name"
                onLoad={() => setLoaded(true)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  //This is for Large screens
  const renderSwiperWithoutPagination = () => {
    return (
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={10}
        className="mySwiper lg:container swiperLarge"
        autoHeight={false}
        loop
        // lazy={true}
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        breakpoints={{
          768: {
            slidesPerView: slidesCount,
          },
        }}
      >
        {slides.map((photo, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              setCurrent(photo);
            }}
          >
            <Image
                className={`w-full h-full obj rounded-l15 object-cover bg-red-500 transition:filter_500ms_cubic-bezier(.4,0,.2,1) ${loaded ? 'blur-0' : 'blur-xl'}`}
                src={getLink(photo)}
                placeholder="blur"
                blurDataURL={getLink(photo)}
                fill
                alt="Project name"
                onLoad={() => setLoaded(true)}
              />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <>
      {showPagination
        ? renderSwiperWithPagination()
        : renderSwiperWithoutPagination()}

      {current && (
        <ModalImage isOpen={openZoom} onClose={() => setOpenZoom(false)}>
          <img
            width="1200"
            height={800}
            className="relative max-w-[90vw] h-auto object-cover rounded-lr "
            alt={current.attributes.name ? current.attributes.name : ""}
            src={getLink(current)}
            // loading="lazy"
          />
        </ModalImage>
      )}

      {slides.length > 1 && !showPagination && (
        <div className="2xl:pt-12 xl:pt-12 lg:pt-7 pt-2 z-5 w-full mx-auto container">
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
                <div className="rounded-lr   w-[266px] h-[150px] overflow-hidden">
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
