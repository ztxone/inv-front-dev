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
import Line from '@/components/ui/Line';

// todo Тестовые данные удалить
const breadCrumbsItems=[
  {
    title: 'Заполнить бриф',
  },
];

export default function Service({projects}) {
  const i18n=useTranslation();
  const locale=i18n.lang;

  return (
    <Layout bg='white' headerBg='white' footerBg='white'>
      <TitleSection text='Заполнить бриф' />
      <Line variantColor='grey' />
      <BreadCrumbs links={breadCrumbsItems} />

    </Layout>
  );
}


