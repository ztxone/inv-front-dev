import Seo from '@/components/seo';
import Layout from '@/components/layout';

import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import ServiceIntro from '@/components/Services/ServiceIntro';
import {fetchAPI} from 'lib/api';
import useTranslation from 'next-translate/useTranslation';
import IntroCost from '@/components/ui/IntroCost';
import ServicesSlides from '@/components/Services/ServicesSlides';
import ProjectsList from '@/components/Projects/ProjectsList';
import Wrapper from '@/components/ui/Wrapper';
import ServicesForCategory from '@/components/Services/ServicesForCategory';
import Line from '@/components/ui/Line';

export default function Service({category}) {
  const i18n=useTranslation();
  const {t}=useTranslation('common');
  const locale=i18n.lang;

  const seo={
    metaTitle: category.attributes.SEO[0].metaTitle,
    metaDescription: category.attributes.SEO[0].metaTitle,
    shareImage: category.attributes.image,
  };

  return (
    <Layout
      bg='black'
      headerBg='white'
      footerBg='black'
      colorLineHeader='grey'
      colorLineFooter='eclipse'
    >
      <Seo seo={seo} />
      <Wrapper color='grey' position='bottom'>
        <TitleSection text={category.attributes.name} />
        <Line variantColor='grey' />
        <BreadCrumbs
          links={[
            {
              title: t('services.linkServices'),
              path: '/services',
            },
            {
              title: category.attributes.name,
            },
          ]}
        />

        <ServiceIntro
          title={t('About service')}
          text={category.attributes.Description}
          image={category.attributes.image}
        />

        <ServicesForCategory parent={category.id} />

        <IntroCost />
        <ServicesSlides />
        <ProjectsList
          moreProjects={true}
          projectsQuantity='100'
          focusService={category.id}
        />
      </Wrapper>
    </Layout>
  );
}

export async function getStaticPaths() {
  const categoriesRes=await fetchAPI('/categories', {
    fields: ['slug'],
  });

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        //slug: category.attributes.slug,
        slug:
          category.attributes.slug!==null
            ? category.attributes.slug.toString()
            :'',
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({params, locale}) {
  const matchingCategories=await fetchAPI('/categories', {
    //fields: ["name", "text", "Description"],
    locale: locale,
    populate: '*',
    filters: {
      slug: params.slug,
    },
  });

  return {
    props: {
      category: matchingCategories.data[0],
    },
    revalidate: 1,
  };
}
