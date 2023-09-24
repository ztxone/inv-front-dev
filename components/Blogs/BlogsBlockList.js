import PillowLink from "@/components/ui/PillowLink";
import Article from "@/components/ui/Article";
import ButtonPagination from "@/components/ui/ButtonPagination";
import TitleColor from "../ui/TitleColor";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import Loading from "@/components/ui/Loading";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useTranslation from "next-translate/useTranslation";
import { fetchAPI } from "lib/api";

export default function BlogsBlockList({
  titleColor,
  articleColor,
  buttonColor,
  blogRes,
}) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const { t } = useTranslation("common");
  const i18n = useTranslation();

  const locale = i18n.lang;

  const swiperRef = useRef();
  const prevSlide = () => swiperRef.current.slidePrev();
  const nextSlide = () => swiperRef.current.slideNext();
  return (
    <section
      className="text-white pt-18 pb-[38px] overflow-hidden max-w-full
    md:pb-20 md:pt-18
    lg:pb-25 lg:pt-29"
    >
      <div
        className="flex justify-between pb-10 items-center
        md:pb-15 lg:pb-18 container"
      >
        <TitleColor textPart1="Блог" textPart2=" invert" color={titleColor} />

        <div className="flex">
          <div ref={navigationPrevRef} onClick={prevSlide}>
            <ButtonPagination variant={buttonColor}>
              <svg
                className='w-[9px] h-[15px] viewBox="0 0 9 15'
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </ButtonPagination>
          </div>
          <div ref={navigationNextRef} onClick={nextSlide}>
            <ButtonPagination variant={buttonColor}>
              <svg
                className='w-[9px] h-[15px] viewBox="0 0 9 15 rotate-180'
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </ButtonPagination>
          </div>
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          560: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }}
      >
        {blogRes &&
          blogRes.map((blog, key) => (
            <SwiperSlide key={key}>
              <Article
                image={blog.attributes.Image_preview}
                link={blog.attributes.slug}
                tag="VR"
                title={blog.attributes.Title}
                text={blog.attributes.Preview}
                variant={articleColor}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <div
        className="pt-7 container
      md:pt-10
      lg:pt-9"
      >
        <PillowLink
          text={t("All_news")}
          link="/news"
          variant="dark"
          variantSvg="whiteSvg"
        />
      </div>
    </section>
  );
}
