import PillowLink from '../../ui/PillowLink';
import TitleH2 from '@/components/ui/TitleH2';
import Article from '@/components/ui/Article';
import ButtonPagination from '@/components/ui/ButtonPagination';
import React, {useRef, useState} from 'react';
import SwiperCore, {Virtual, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Blog({titleColor, articleColor, buttonColor}) {
  const [swiperRef, setSwiperRef]=useState(null);
  const appendNumber=useRef(500);
  const prependNumber=useRef(1);
  // Create array with 500 slides
  const [slides, setSlides]=useState(
    Array.from({length: 500}).map((_, index) => `Slide ${index+1}`)
  );

  const prepend=() => {
    setSlides([
      `Slide ${prependNumber.current-2}`,
      `Slide ${prependNumber.current-1}`,
      ...slides,
    ]);
    prependNumber.current=prependNumber.current-2;
    swiperRef.slideTo(swiperRef.activeIndex+2, 0);
  };

  const append=() => {
    setSlides([...slides, 'Slide '+ ++appendNumber.current]);
  };

  const slideTo=(index) => {
    swiperRef.slideTo(index-1, 0);
  };

  return (
    <section
      className='text-white pt-20 pb-[38px] mx-auto
    md:pb-20 md:pt-20
    lg:pb-20 lg:max-w-[1746px] lg:pt-33 pl-3.8'
    >
      <div
        className='flex justify-between pb-10 items-center
        md:pb-15 lg:pb-18'
      >
        <TitleH2 text='Блог invert' variant={titleColor} />

        <div className='flex'>
          <ButtonPagination variant={buttonColor}>
            <svg
              className='w-[9px] h-[15px] viewBox="0 0 9 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416'
                stroke='currentColor'
                strokeWidth='1.5'
              />
            </svg>
          </ButtonPagination>

          <ButtonPagination variant={buttonColor}>
            <svg
              className='w-[9px] h-[15px] viewBox="0 0 9 15 rotate-180'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416'
                stroke='currentColor'
                strokeWidth='1.5'
              />
            </svg>
          </ButtonPagination>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        scrollbar={{draggable: true}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={setSwiperRef}
        centeredSlides={true}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
        className='flex overflow-hidden pb-7 gap-2.5
      md:pb-10 md:gap-7
      lg:pl-0 lg:pb-9'
      >
        <SwiperSlide className='min-h-[471px] w-[288px] md:w-[562px] shrink-0'>
          <Article
            link='/image/content/image-10.png'
            tag='VR'
            title='VR-футболка Owo: мнения тестеров'
            text='Футболка Owo дает ощутимую обратную связь в&nbsp;виртуальной
              реальности, как тактильный жилет, но&nbsp;с&nbsp;электрическим
              током до&nbsp;предела личной боли.'
            variant={articleColor}
          />
        </SwiperSlide>

        <SwiperSlide className='w-[288px] md:w-[562px] shrink-0'>
          <Article
            link='/image/content/image-11.png'
            tag='3D'
            title='3D Max реально освоить самому'
            text='Футболка Owo дает ощутимую обратную связь в&nbsp;виртуальной
              реальности, как тактильный жилет, но&nbsp;с&nbsp;электрическим
              током до&nbsp;предела личной боли.'
          />
        </SwiperSlide>

        <SwiperSlide className='w-[288px] md:w-[562px] shrink-0'>
          <Article
            link='/image/content/image-12.png'
            tag='Новости'
            title='Самый инновационный ноутбук от Apple — MacBook Retina'
            text='Футболка Owo дает ощутимую обратную связь в&nbsp;виртуальной
              реальности, как тактильный жилет, но&nbsp;с&nbsp;электрическим
              током до&nbsp;предела личной боли.'
          />
        </SwiperSlide>

        <SwiperSlide className='w-[288px] md:w-[562px] shrink-0'>
          <Article
            link='/image/content/image-12.png'
            tag='Новости'
            title='Самый инновационный ноутбук от Apple — MacBook Retina'
            text='Футболка Owo дает ощутимую обратную связь в&nbsp;виртуальной
              реальности, как тактильный жилет, но&nbsp;с&nbsp;электрическим
              током до&nbsp;предела личной боли.'
          />
        </SwiperSlide>
      </Swiper>

      <div>
        <PillowLink
          text='Все новости'
          link='#'
          variant='dark'
          variantSvg='whiteSvg'
        />
      </div>
    </section>
  );
}
