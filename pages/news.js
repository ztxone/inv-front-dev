import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import Line from "@/components/ui/Line";
import NewsList from "@/components/News/NewsList";
import IntroCost from "@/components/ui/IntroCost";
import { fetchAPI } from "lib/api";

export default function News({ news }) {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;

  const breadCrumbsItems = [
    {
      title: "Новости компании",
    },
  ];

  return (
    // <Layout bg="white" headerBg="white" footerBg="white" pillowColor=''>
    <>
      <TitleSection text="Новости компании" />
      <Line variantColor="grey" />
      <BreadCrumbs links={breadCrumbsItems} />
      <NewsList news={news} />
      <IntroCost />
      <Line variantColor="grey" />
    </>
  );
}

export async function getStaticProps({ locale }) {
  // Run API calls in parallel
  const [blogsRes] = await Promise.all([
    fetchAPI("/blogs", {
      fields: ["Title", "slug", "Preview"],
      locale: locale,
      populate: {
        Image_preview: "*",
        tag: "*",
      },
      pagination: {
        start: 0,
        limit: 6,
      },
    }),
  ]);

  return {
    props: {
      news: blogsRes.data,
    },
    revalidate: 1,
  };
}

News.getLayout = function getLayout(page) {
  return (
    <Layout bg="white" headerBg="white" footerBg="white" pillowColor="">
      {page}
    </Layout>
  );
};
