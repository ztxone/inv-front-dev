import ProjectSlide from './ProjectSlide';
import {Virtual, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ProjectCarousel() {
  return (
    <div className='pl-3.8 pt-2.5 pb-7 lg:container w-full mx-auto'>
      <Swiper
        modules={[Navigation, Virtual, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        scrollbar={{draggable: true}}
        onSlideChange={() => console.log('slide change')}
        virtual
        className='flex pb-7 
        md:w-full'
      >
        <SwiperSlide>
          <ProjectSlide />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectSlide />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectSlide />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
