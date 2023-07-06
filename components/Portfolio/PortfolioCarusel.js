import PillowLink from '../ui/PillowLink';
import ProjectItemImage from '../ui/ProjectItemImage';
import ProjectItemWork from '../ui/ProjectItemWork';
import Title from '../ui/Title';
import {Virtual, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function PortfolioCarusel() {
  return (
    <div className='pt-21 pb-18 flex flex-col gap-10'>
      <Title text='Смотреть портфолио' variant='white' />
      <PillowLink
        variant='white'
        text='Все проекты'
        variantSvg='blueSvg'
        link='#'
      />
      <Swiper
        modules={[Navigation, Virtual, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        scrollbar={{draggable: true}}
        onSlideChange={() => console.log('slide change')}
        virtual
        className='flex pb-7 gap-2.5'
      >
        <SwiperSlide className="shrink-0">
          <ProjectItemWork name='Жилой комплекс «ТАЙМ»'>
            <ProjectItemImage
              link='/image/content/time.png'
              width='398'
              height='557'
              variant='imageBlock'
            />
          </ProjectItemWork>
        </SwiperSlide>

        <SwiperSlide>
          <ProjectItemWork name='Жилой комплекс «ТАЙМ»'>
            <ProjectItemImage
              link='/image/content/time.png'
              width='398'
              height='557'
              variant='imageBlock'
            />
          </ProjectItemWork>
        </SwiperSlide>

        <SwiperSlide>
          <ProjectItemWork name='Жилой комплекс «ТАЙМ»'>
            <ProjectItemImage
              link='/image/content/time.png'
              width='398'
              height='557'
              variant='imageBlock'
            />
          </ProjectItemWork>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
