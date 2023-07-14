import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import IntroSlides from "@/components/ui/IntroSlides";
import IntroCost from "@/components/ui/IntroCost";
import BlogsBlockList from "@/components/Blogs/BlogsBlockList";
import ProjectsListPortfolio from "@/components/Projects/ProjectsListPortfolio";
import TagBlock from '@/components/Projects/TagBlock';
import Line from '@/components/ui/Line';
import Video from '@/components/Projects/Video';

export default function Portfolio({projects}) {
  const {t}=useTranslation("common");
  const i18n=useTranslation();
  const locale=i18n.lang;

  const breadCrumbsItems=[
    {
      title: 'Портфолио',
      path: '/portfolio',
    },
    {
      title: ' Home of Cool™',
    },
  ];


  return (
    <Layout bg="white" headerBg="white" footerBg="black">
      <TitleSection text='Home of Cool™️' />
      <TagBlock text='3D анимация' />
      <Line variantColor='grey' />
      <BreadCrumbs links={breadCrumbsItems} />
      <Video />

    </Layout>
  );
}
