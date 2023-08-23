import Layout from '@/components/layout';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import useTranslation from 'next-translate/useTranslation';
import IntroSlides from '@/components/ui/IntroSlides';
import IntroCost from '@/components/ui/IntroCost';
import BlogsBlockList from '@/components/Blogs/BlogsBlockList';
import ProjectsListPortfolio from '@/components/Projects/ProjectsListPortfolio';
import Line from '@/components/ui/Line';
import Wrapper from '@/components/ui/Wrapper';

export default function Portfolio({projects, categories}) {
  const {t}=useTranslation('common');
  const i18n=useTranslation();
  const locale=i18n.lang;

  return (
    <Layout
      bg='black'
      headerBg='white'
      footerBg='black'
      pillowColor=''
    >
      <Wrapper color='grey'>
        <TitleSection text={t`works.title`} />
        <Line variantColor='grey' />
        <BreadCrumbs
          links={[
            {
              title: t`works.title`,
              path: '',
              active: false,
            },
          ]}
        />
        <ProjectsListPortfolio />
      </Wrapper>
      <IntroSlides />
      <IntroCost />
      <BlogsBlockList
        articleColor='nero'
        titleColor='white'
        buttonColor='white'
      />
    </Layout>
  );
}
