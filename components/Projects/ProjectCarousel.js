import ProjectSlide from "./ProjectSlide";
import { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ProjectCarousel({ fotos }) {
  return (
    <div
      className="pl-3.8 pt-2.5 pb-7 lg:container w-full mx-auto
    md:pt-7"
    >
      <Swiper
        modules={[Navigation, Virtual, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        virtual
        className="flex pb-7 
        md:w-full"
      >
        {fotos.map((foto, key) => (
          <SwiperSlide key={key}>
            <ProjectSlide foto={foto} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
