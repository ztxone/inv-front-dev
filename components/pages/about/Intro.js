import {Container} from 'postcss';
import Title from '../../ui/Title';
import BreadCrumbs from '../../ui/Breadcrumbs';
// import Tag from './Tag';
// import IntroButton from './IntroButton';
// import IntroItem from './IntroItem';
import IntroSlides from '../../ui/InroSlides';
import IntroDescription from '../../ui/IntroDescription';
import IntroCost from '@/components/ui/IntroCost';

export default function Intro() {
  return (
    <div className='container border-t border-light-grey pt-20 pb-15 px-3.8 lg:max-w-[1746px]'>
      <Title text='О студии' variant='white' />

      <div className='border-t border-light-grey mt-10 py-5'>
        <BreadCrumbs item1='Главная' link1='/index' itemLast='О студии' />
      </div>
      <div className='lg:flex flex-wrap justify-between pb-15'>
      <IntroDescription title='наша основная цель' text='Мы предоставляем услуги по 3D визуализации архитектурных объектов и
          предметов, создание видео роликов основанных на 3D технологии. Мы
          имеем мощную техническую базу и большой опыт, поэтому можем предложить
          конкурентно способный продукт.'></IntroDescription>
      <IntroSlides />
      <IntroDescription title='наши возможности' text='Студия INVERT это сильная команда специалистов в сфере разработки 3D
          визуализации любой сложности и направления. Наша основная цель
          создавать только качественный контент для наших клиентов, который
          полностью удовлетворит их потребности и запросы.'></IntroDescription>
      </div>

      <IntroCost/>
    </div>
  );
}
