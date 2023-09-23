import Link from 'next/link';
import {Virtual, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import NewsSlide from './NewsSlide';

export default function CarouselNews() {
  return (
    <div className='overflow-hidden'>
      <div className='h-[232px]'>
        <Swiper
          modules={[Navigation, Virtual, Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          scrollbar={{draggable: true}}
          onSlideChange={() => console.log('slide change')}
          virtual
          className='!-mr-3.8 flex
        md:gap-7
        lg:pl-0 lg:pb-9'
        >
          <SwiperSlide className='shrink-0 min-h-full:'>
            <NewsSlide />
          </SwiperSlide>
          <SwiperSlide className='shrink-0'>
            <NewsSlide />
          </SwiperSlide>
          <SwiperSlide className='shrink-0'>
            <NewsSlide />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='container'>
        <p className='pb-10.5 leading-6.5'>
          Подобрать выгодную ставку, правильно заполнить анкету для заявки
          поможет ипотечный специалист компании. Подать документы и получить
          положительное ипотечное решение можно дистанционно. Первоначальный
          взнос — от 0%. Подобрать выгодную ставку, правильно заполнить анкету
          для заявки поможет ипотечный специалист компании. Подать документы и
          получить положительное ипотечное решение можно дистанционно. Подобрать
          выгодную ставку, правильно заполнить анкету для заявки поможет
          ипотечный специалист компании. Подать документы и получить
          положительное ипотечное решение можно дистанционно. Первоначальный
          взнос — от 0%. Подобрать выгодную ставку, правильно заполнить анкету
          для заявки поможет ипотечный специалист компании. Подать документы и
          получить положительное ипотечное решение можно дистанционно.
        </p>
      </div>
    </div>
  );
}
