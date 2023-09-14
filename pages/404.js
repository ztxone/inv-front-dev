import Layout from '@/components/layout';
import useTranslation from 'next-translate/useTranslation';
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
