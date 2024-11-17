import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image"
import { Thumbs, Pagination } from "swiper/modules";
import 'swiper/css/pagination';

export const SwiperVideo2 = ({ videoSlides }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [loaded, setLoaded] = useState(false)
  
  return (
    <div className="relative container">     
      <div className={`container mx-auto`}>        
        <Swiper
          className="ddvideoGallery"
          scrollbar={{ draggable: true }}
          loop={true}
          centeredSlides={true}
          modules={[Thumbs, Pagination]}
          thumbs={{
            swiper: thumbsSwiper,
          }}
        >
          {videoSlides.map((video, index) => (
            <SwiperSlide key={index}>
              <iframe
                className='rounded-xl mx-auto'
                width="720" height="405"
                src={video.src}
                loading="lazy"
                aria-hidden="false"
                allowFullScreen
                >
              </iframe>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    
      {videoSlides.length > 1 && (
        <div className="2xl:pt-12 xl:pt-12 lg:pt-7 pt-2 z-5 w-full mx-auto container">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            scrollbar={{ draggable: true }}
            onSwiper={setThumbsSwiper}
          >
            {videoSlides.map((photo, index) => (
              <SwiperSlide key={index} style={{ flexShrink: 1 }}>
                <div className="rounded-lr w-[266px] h-[150px] overflow-hidden">
                  {photo.poster.data == null ? <p className="flex items-center justify-center bg-gray w-full h-full text-white"> Poster has not set</p> : 
                    <Image
                    className="w-full h-full object-cover"
                    width={266}
                    height={150}
                    alt={photo.poster.data?.attributes.alternativeText}
                    src={`https://admin.invert.studio`+photo.poster.data.attributes.url}
                    style={{
                      filter: !loaded ? "blur(70px)" : "none",
                      transition: "filter 0.2s ease-out",
                    }}
                    onLoad={() => setLoaded(true)}
                    loading="lazy"
                    />
                  }
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};
