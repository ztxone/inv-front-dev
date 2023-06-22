import Layout from '@/components/layout';
import useTranslation from 'next-translate/useTranslation';
import {fetchAPI} from 'lib/api';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import ServiceIntro from '@/components/Services/ServiceIntro';
import ServiceBlock from '@/components/SeparateService/ServiceBlock';
import IntroCost from '@/components/ui/IntroCost';
import IntroSlides from '@/components/ui/IntroSlides';
import TagItemSection from '@/components/ui/TagItemSection';
import ProjectsListBlock from '@/components/Projects/ProjectsList';
import Blog from '@/components/pages/index/Blog';

// todo Тестовые данные удалить
const breadCrumbsItems=[
  {
    title: 'Главная',
    path: '/index',
  },
  {
    title: 'Услуги',
    path: '/products',
  },
  {
    title: 'Архитектурная 3D визуализация',
  },
];

export default function Service({projects}) {
  const i18n=useTranslation();
  const locale=i18n.lang;

  return (
    <Layout bg='white' headerBg='white' footerBg='black'>
      <div className='lg:max-w-[1920px]'>
        <div>
          <TitleSection text='Архитектурная 3D&nbsp;визуализация' />
          <BreadCrumbs links={breadCrumbsItems} />
        </div>
        <ServiceIntro
          title='об услуге'
          text='Архитектурная 3D визуализация это доступный и&nbsp;выгодный способ демонстрации внешнего вида ваших проектов от&nbsp;интерьера квартиры до&nbsp;жилого комплекса. Предметная 3D визуализация это отличный вариант презентовать ваш товара, подготовить рекламный контент или показать внутреннее устройство вашего продукта. 3D моделирование будет полезно в&nbsp;прототипирование для дальнейшего изготовления модели на&nbsp;3D принтере или фрезеровки.'
        />
        <ServiceBlock />
        <IntroCost />
        <div className='px-3.8'>
          <IntroSlides />
        </div>
        <div className='flex flex-wrap md:w-4/5'>
          <TagItemSection text='Архитектурная 3D визуализация' color='blue' />
          <TagItemSection text='Продуктовая 3D визуализация' color='white' />
          <TagItemSection text='Моушн & Видеопродакшн' color='white' />
          <TagItemSection text='3D моделирование' color='white' />
        </div>
        <ProjectsListBlock projects={projects} moreProjects={false} />
        <Blog articleColor='inherit' titleColor='black' buttonColor='black' />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel

  const [projectsRes]=await Promise.all([
    fetchAPI('/projects', {
      sort: ['ListPosition:asc'],
      populate: ['Poster', 'tags'],
      fields: ['Title', 'slug'],
    }),
  ]);

  return {
    props: {
      projects: projectsRes.data,
    },
    revalidate: 1,
  };
}
