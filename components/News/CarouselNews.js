import Link from "next/link";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NewsSlide from "./NewsSlide";

export default function CarouselNews() {
  return (
    <div className="pt-12 overflow-hidden">
      <div className="container pb-">
        <h2 className="text-xl pb-5">
          Первоначальный взнос — от 0%. Подобрать выгодную ставку, правильно
          заполнить анкету для заявки поможет ипотечный специалист компании.{" "}
        </h2>
        <p className="pb-12">
          Подобрать выгодную ставку, правильно заполнить анкету для заявки
          поможет ипотечный специалист компании. Подать документы и получить
          положительное ипотечное решение можно дистанционно. Первоначальный
          взнос — от 0%. Подобрать выгодную ставку, правильно заполнить анкету
          для заявки поможет ипотечный специалист компании. Подать документы и
          получить положительное ипотечное решение можно дистанционно.{" "}
        </p>
        <Link className="text-blue underline  pb-5" href="#">
          Ссылка на источник{" "}
        </Link>
      </div>
      <Swiper
        modules={[Navigation, Virtual, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        virtual
        className="!-mr-3.8 flex
        md:gap-7
        lg:pl-0 lg:pb-9"
      >
        <SwiperSlide className="shrink-0">
          <NewsSlide />
        </SwiperSlide>
        <SwiperSlide className="shrink-0">
          <NewsSlide />
        </SwiperSlide>
        <SwiperSlide className="shrink-0">
          <NewsSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
