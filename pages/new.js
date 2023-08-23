import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import useTranslation from "next-translate/useTranslation";
import Line from '@/components/ui/Line';
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import IntroNews from '@/components/News/IntroNews';
import CarouselNews from '@/components/News/CarouselNews';


export default function New({projects}) {
  const {t}=useTranslation("common");
  const i18n=useTranslation();
  const locale=i18n.lang;

  const breadCrumbsItems=[
    {
      title: 'Новости компании',
      path: '/news',
    },
    {
      title: ' VR-футболка Owo: мнения тестеров',
    },
  ];


  return (
    <Layout bg="white" headerBg="white" footerBg="white" pillowColor=''>
      <TitleSection text='VR-футболка Owo: мнения тестеров' />
      <Line variantColor='grey' />
      <BreadCrumbs links={breadCrumbsItems} />
      <IntroNews />
      <CarouselNews />

    </Layout>
  );
}
