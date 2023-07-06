import PillowLink from '../ui/PillowLink';
import ProjectItemImage from '../ui/ProjectItemImage';
import Title from '../ui/Title';
import {Virtual, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import ProjectItemCarusel from './ProjectItemCarusel';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function PortfolioCarusel() {
  return (
    <div className='pt-21 pb-18 flex flex-col gap-10 -mr-3.8'>
      <Title text='Смотреть портфолио' variant='white' />
      <PillowLink
        variant='white'
        text='Все проекты'
        variantSvg='blueSvg'
        link='#'
      />
      <Swiper
        modules={[Navigation, Virtual, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        scrollbar={{draggable: true}}
        onSlideChange={() => console.log('slide change')}
        virtual
        className='flex pb-7 gap-2.5'
      >
        <SwiperSlide>
          <ProjectItemCarusel name='Жилой комплекс «ТАЙМ»'>
            <ProjectItemImage
              link='/image/content/time.png'
              width='288'
              height='147'
              variant='imageBlock'
            />
          </ProjectItemCarusel>
        </SwiperSlide>
        <SwiperSlide>
          <ProjectItemCarusel name='Жилой комплекс «ТАЙМ»'>
            <ProjectItemImage
              link='/image/content/time.png'
              width='288'
              height='147'
              variant='imageBlock'
            />
          </ProjectItemCarusel>
        </SwiperSlide>
        <SwiperSlide>
          <ProjectItemCarusel name='Жилой комплекс «ТАЙМ»'>
            <ProjectItemImage
              link='/image/content/time.png'
              width='288'
              height='147'
              variant='imageBlock'
            />
          </ProjectItemCarusel>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
