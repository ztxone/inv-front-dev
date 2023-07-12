import PillowLink from "../ui/PillowLink";
import ProjectItemImage from "../ui/ProjectItemImage";
import Title from "../ui/Title";
import { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectItemCarousel from "./ProjectItemCarousel";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PortfolioCarousel() {
  return (
    <div
      className="container pt-21 pb-18 flex flex-col gap-10 w-full
    md:flex-row flex-wrap justify-between   max-w-[1746px] lg:mx-auto"
    >
      <Title text="Смотреть портфолио" variant="white" />
      <PillowLink
        variant="white"
        text="Все проекты"
        variantSvg="blueSvg"
        link="#"
      />
      <Swiper
        modules={[Navigation, Virtual, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        virtual
        className="flex pb-7 gap-2.5
        md:w-full !-mr-3.8"
      >
        <SwiperSlide>
          <ProjectItemCarousel name="Жилой комплекс «ТАЙМ»">
            <ProjectItemImage
              link="/image/content/time.png"
              width="288"
              height="147"
              variant="imageBlock"
            />
          </ProjectItemCarousel>
        </SwiperSlide>
        <SwiperSlide>
          <ProjectItemCarousel name="Жилой комплекс «ТАЙМ»">
            <ProjectItemImage
              link="/image/content/time.png"
              width="288"
              height="147"
              variant="imageBlock"
            />
          </ProjectItemCarousel>
        </SwiperSlide>
        <SwiperSlide>
          <ProjectItemCarousel name="Жилой комплекс «ТАЙМ»">
            <ProjectItemImage
              link="/image/content/time.png"
              width="288"
              height="147"
              variant="imageBlock"
            />
          </ProjectItemCarousel>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
