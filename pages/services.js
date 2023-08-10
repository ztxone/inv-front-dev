import Layout from '@/components/layout';
import {fetchAPI} from 'lib/api';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import useTranslation from 'next-translate/useTranslation';
import Line from '@/components/ui/Line';
import Wrapper from '@/components/ui/Wrapper';
import ServicesListPage from '@/components/Services/ServicesListPage';
import ServicesSlides from '@/components/Services/ServicesSlides';
import PortfolioCarousel from '@/components/Portfolio/PortfolioCarousel';

export default function Services({services, projects}) {
  const {t}=useTranslation('common');
  const i18n=useTranslation();
  const locale=i18n.lang;

  return (
    <Layout
      bg='white'
      headerBg='black'
      footerBg='white'
      colorLineHeader='eclipse'
    >
      <div>
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
        {/* <IntroSlides /> */}
        <ServicesSlides />

        <PortfolioCarousel projects={projects} />
        <Line variantColor='grey' />
      </div>
    </Layout>
  );
}

export async function getStaticProps({locale}) {
  // Run API calls in parallel
  const [servicesRes, projectsRes]=await Promise.all([
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
