import Layout from '@/components/layout';
import {fetchAPI} from 'lib/api';
import IntroCost from '@/components/ui/IntroCost';
import useTranslation from 'next-translate/useTranslation';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import ProjectsList from '@/components/Projects/ProjectsList';
import BlogsBlockList from '@/components/Blogs/BlogsBlockList';
import Wrapper from '@/components/ui/Wrapper';
import Line from '@/components/ui/Line';
import IntroError from '@/components/ui/IntroError';
import ServicesSlides from '@/components/Services/ServicesSlides';

export default function ErrorPage({}) {
  const {t} = useTranslation('common');

  return (
    <>
      <Wrapper color='black' position='bottom'>
        <IntroError />
      </Wrapper>
      <div className='py-3.8'>
        <ServicesSlides />
      </div>
      <Line variantColor='grey' />
    </>
  );
}

ErrorPage.getLayout = function getLayout(page) {
  return (
    <Layout bg='grey' headerBg='black' footerBg='white' pillowColor={'grey'}>
      {page}
    </Layout>
  );
};
