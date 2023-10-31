import Layout from '@/components/layout';
import { fetchAPI } from 'lib/api';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import useTranslation from 'next-translate/useTranslation';
import Line from '@/components/ui/Line';
import Wrapper from '@/components/ui/Wrapper';
import ServicesListPage from '@/components/Services/ServicesListPage';
import ServicesSlides from '@/components/Services/ServicesSlides';
import PortfolioCarousel from '@/components/Portfolio/PortfolioCarousel';
import Seo from '@/components/seo';
import IntroSlides from '@/components/ui/IntroSlides';

export default function Services({ services, projects }) {
  const { t } = useTranslation('common');
  const i18n = useTranslation();
  const locale = i18n.lang;

  const seo = {
    metaTitle: t('services.title'),
    metaDescription: t('services.meta_description'),
    shareImage: '',
  };

  return (
    <>
      <Seo seo={seo} />
      <Wrapper>
        <TitleSection text={t`services.title`} variantColor='white' />
        <Line />
        <BreadCrumbs
          links={[
            {
              title: t`services.title`,
              path: '',
              active: false,
            },
          ]}
        />
        <ServicesListPage services={services} />
      </Wrapper>

      <div className='container md:pt-15 lg:pt-20'>
        <ServicesSlides />
      </div>

      <PortfolioCarousel projects={projects} />
      <Line variantColor='grey' />
    </>
  );
}

export async function getStaticProps({ locale }) {
  // Run API calls in parallel
  const [servicesRes, projectsRes] = await Promise.all([
    fetchAPI('/categories', {
      populate: '*',
      fields: ['name', 'slug', 'text'],
      locale: locale,
      filters: {
        ShowOnMainPage: true,
      },
    }),
    fetchAPI('/projects', {
      sort: ['ListPosition:asc'],
      populate: {
        Poster: '*',
        tags: '*',
      },
      fields: ['Title', 'slug'],
      locale: locale,
      filters: {
        ShowOnMainPage: true,
      },
      pagination: {
        start: 0,
        limit: 3,
      },
    }),
  ]);

  return {
    props: {
      services: servicesRes.data,
      projects: projectsRes.data,
    },
    revalidate: 1,
  };
}

Services.getLayout = function getLayout(page) {
  return (
    <Layout bg='white' headerBg='black' footerBg='white' pillowColor=''>
      {page}
    </Layout>
  );
};
