import Layout from '@/components/layout';
import TitleSection from '@/components/ui/TitleSection';
import useTranslation from 'next-translate/useTranslation';
import Line from '@/components/ui/Line';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import IntroNews from '@/components/News/IntroNews';
import CarouselNews from '@/components/News/CarouselNews';
import TitleSectionButton from '@/components/ui/TitleSectionButton';
import AlbumSave from '@/components/News/AlbumSave';
import Quote from '@/components/ui/Quote';
import TagItemContainer from '@/components/ui/TagItemContainer';
import TagItemSection from '@/components/ui/TagItemSection';
import TagNew from '@/components/News/TagNew';
import Image from 'next/image';
import DescriptionNews from '@/components/News/DescriptionNews';
import BlogsBlockList from '@/components/Blogs/BlogsBlockList';

export default function New({projects}) {
  const {t} = useTranslation('common');
  const i18n = useTranslation();
  const locale = i18n.lang;

  const breadCrumbsItems = [
    {
      title: 'Новости компании',
      path: '/news',
    },
    {
      title: ' VR-футболка Owo: мнения тестеров',
    },
  ];

  return (
    <>
      <TitleSectionButton text='VR-футболка Owo: мнения тестеров' />
      <Line variantColor='grey' />
      <BreadCrumbs links={breadCrumbsItems} />
      <TagNew text1='VR' text2='Новости' color='white' />
      <IntroNews />
      <DescriptionNews linktext='Ссылка на источник ' />
      <CarouselNews />
      <AlbumSave />
      <Line variantColor='grey' />
      <Quote text='цитата! Первоначальный взнос — от 0%. Подобрать выгодную ставку, правильно заполнить анкету для заявки поможет ипотечный специалист компании. Подать документы и получить положительное ипотечное решение можно дистанционно. ' />
      <Line variantColor='grey' />
      <DescriptionNews linktext='Поделиться' />
      {/* <BlogsBlockList
        articleColor="nero"
        titleColor="white"
        buttonColor="white"
        blogRes={blogs}
      /> */}
      <Line variantColor='grey' />
    </>
  );
}

New.getLayout = function getLayout(page) {
  return (
    <Layout bg='white' headerBg='white' footerBg='white' pillowColor=''>
      {page}
    </Layout>
  );
};
