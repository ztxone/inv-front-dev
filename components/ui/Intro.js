import {Container} from 'postcss';
import Title from './Title';
import BreadCrumbs from './Breadcrumbs';
import Tag from './Tag';
import IntroButton from './IntroButton';
import IntroItem from './IntroItem';

export default function Intro() {
  return (
    <div className='container border-t border-light-grey pt-20 pb-15 px-3.8'>
      <Title text='О студии' variant='white' />
      <div className='border-t border-light-grey mt-10 py-5'>
        <BreadCrumbs item1='Главная' link1='/index' itemLast='О студии' />
        <h3 className='uppercase font-bold pt-12 pb-7'>наша основная цель</h3>
        <p className='leading-5'>
          Студия INVERT это сильная команда специалистов в сфере разработки 3D
          визуализации любой сложности и направления. Наша основная цель
          создавать только качественный контент для наших клиентов, который
          полностью удовлетворит их потребности и запросы.
        </p>
      </div>
      <div className='flex flex-col gap-2.5 pb-15'>
        <IntroItem background="bg-[url('/image/content/flyer-paper-mockup.png')]">
          <Tag text1='pdf' />
          <h3 className='text-xl tracking-tight text-white mt-5'>
            Архитектурная визуализация
          </h3>
          <IntroButton text='Скачать презентацию'>
            <span className='button-round bg-black-russian2 mt-auto'>
              <svg
                width='11'
                height='10'
                viewBox='0 0 11 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10 1L5.5 5L1 1'
                  stroke='currentColor'
                  strokeWidth='1.5'
                />
                <line
                  x1='1'
                  y1='9.25'
                  x2='10'
                  y2='9.25'
                  stroke='currentColor'
                  strokeWidth='1.5'
                />
              </svg>
            </span>
          </IntroButton>
        </IntroItem>

        <IntroItem background="bg-[url('/image/content/video.png')]">
          <Tag text1='Showreel' />
          <h3 className='text-xl tracking-tight text-white mt-5'>
            Моушн & Видеопродакшн
          </h3>
          <IntroButton text='Смотреть Showreel компании'>
            <span className='button-round bg-black-russian2 mt-auto'>
              <svg
                width='9'
                height='11'
                viewBox='0 0 9 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.5 4.63397C9.16667 5.01888 9.16667 5.98113 8.5 6.36603L1.75 10.2631C1.08333 10.648 0.25 10.1669 0.25 9.39711L0.250001 1.60289C0.250001 0.833085 1.08333 0.35196 1.75 0.73686L8.5 4.63397Z'
                  fill='currentColor'
                />
              </svg>
            </span>
          </IntroButton>
        </IntroItem>

        <IntroItem background="bg-[url('/image/content/home.png')]">
          <div className='bg-black  w-fit rounded-full px-[16px] py-[7px] inline-flex items-center relative z-20'>
            <span className='bg-white rounded-full w-[4px] h-[4px] mr-[5px]'></span>
            <p className='text-xxs font-interTight uppercase font-medium  text-white'>
              pdf
            </p>
          </div>
          <h3 className='text-xl tracking-tight text-black mt-5'>
            Продуктовая визуализация
          </h3>
          <IntroButton text='Скачать презентацию' variant='dark'>
            <span className='button-round bg-royal-blue mt-auto'>
              <svg
                width='11'
                height='10'
                viewBox='0 0 11 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10 1L5.5 5L1 1'
                  stroke='currentColor'
                  strokeWidth='1.5'
                />
                <line
                  x1='1'
                  y1='9.25'
                  x2='10'
                  y2='9.25'
                  stroke='currentColor'
                  strokeWidth='1.5'
                />
              </svg>
            </span>
          </IntroButton>
        </IntroItem>
      </div>

      <h3 className='uppercase font-bold pt-12 pb-7'>наши возможности</h3>
      <p className='leading-5'>
        Мы предоставляем услуги по 3D визуализации архитектурных объектов и
        предметов, создание видео роликов основанных на 3D технологии. Мы имеем
        мощную техническую базу и большой опыт, поэтому можем предложить
        конкурентно способный продукт.
      </p>
     
    </div>
  );
}
