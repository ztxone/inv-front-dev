import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import useTranslation from "next-translate/useTranslation";
import Line from "@/components/ui/Line";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import IntroNews from "@/components/News/IntroNews";
import CarouselNews from "@/components/News/CarouselNews";

import { fetchAPI } from "lib/api";
import Seo from "@/components/seo";
import ProjectsListPortfolio from "@/components/Projects/ProjectsListPortfolio";

export default function Tag({ tag }) {
  const { t } = useTranslation("common");
  const seo = {
    metaTitle: tag.attributes.Name,
    metaDescription: tag.attributes.Text,
    shareImage: tag.attributes.Image_preview,
  };
  //console.log(blog);

  const breadCrumbsItems = [
    {
      title: t("All_news"),
      path: "/news",
    },
    {
      title: tag.attributes.Name,
    },
  ];

  return (
    <Layout bg="white" headerBg="white" footerBg="black" pillowColor="">
      {/* <Seo seo={seo} /> */}
      <TitleSection text={tag.attributes.Name} />
      <Line variantColor="grey" />
      <BreadCrumbs links={breadCrumbsItems} />
      <ProjectsListPortfolio tag={tag} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const tagsRes = await fetchAPI("/tags", { fields: ["slug"] });

  return {
    paths: tagsRes.data.map((tag) => ({
      params: {
        slug: tag.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const matchingTags = await fetchAPI("/tags", {
    populate: "*",
    filters: { slug: params.slug },
  });

  return {
    props: {
      tag: matchingTags.data[0],
    },
    revalidate: 1,
  };
}
