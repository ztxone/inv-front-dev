import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import BlogSlide from "pages/blog/BlogSlide";
import ReactMarkdown from "react-markdown";

export default function CarouselNews({ slides, blog }) {
  return (
    <div className="pt-12 overflow-hidden">
      <div className="container">
        <ReactMarkdown className="richText">
          {blog.attributes.Advertise}
        </ReactMarkdown>
        <Link className="text-blue underline  pb-5" href="#">
          Ссылка на источник{" "}
        </Link>
      </div>
      {slides.data && (
        <Swiper
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            560: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
        >
          {slides.data.map((slide, index) => (
            <SwiperSlide key={index}>
              <BlogSlide photo={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
