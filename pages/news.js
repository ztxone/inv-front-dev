import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import Line from '@/components/ui/Line';
import NewsList from '@/components/News/NewsList';
import IntroCost from '@/components/ui/IntroCost';


export default function News() {
  const {t}=useTranslation("common");
  const i18n=useTranslation();
  const locale=i18n.lang;

  const breadCrumbsItems=[
    {
      title: 'Новости компании',
    },
  ];


  return (
    <Layout bg="white" headerBg="white" footerBg="white" pillowColor=''>
      <TitleSection text='Новости компании' />
      <Line variantColor='grey' />
      <BreadCrumbs links={breadCrumbsItems} />
      <NewsList />
      <IntroCost />
      <Line variantColor='grey' />


    </Layout>
  );
}
