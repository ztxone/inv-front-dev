import Link from "next/link";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BlogSlide } from "pages/blog/BlogSlide";

export default function CarouselNews({ slides }) {
  console.log(slides);
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
      {slides.data && (
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}

          // loop={true}
          // className="!-mr-3.8 flex
          // md:gap-7
          // lg:pl-0 lg:pb-9"
        >
          {slides.data.map((slide) => (
            <SwiperSlide style={{ flexShrink: 1 }} key={slide.id}>
              <BlogSlide photo={slide} />
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <NewsSlide />
          </SwiperSlide>
          <SwiperSlide>
            <NewsSlide />
          </SwiperSlide> */}
        </Swiper>
      )}
    </div>
  );
}
