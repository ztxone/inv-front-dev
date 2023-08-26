import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import useTranslation from "next-translate/useTranslation";
import Line from "@/components/ui/Line";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import IntroNews from "@/components/News/IntroNews";
import CarouselNews from "@/components/News/CarouselNews";

import { fetchAPI } from "lib/api";
import Seo from "@/components/seo";

export default function Blog({ blog }) {
  const { t } = useTranslation("common");
  const seo = {
    metaTitle: blog.attributes.Title,
    metaDescription: blog.attributes.Text,
    shareImage: blog.attributes.Image_preview,
  };
  //console.log(blog);

  const breadCrumbsItems = [
    {
      title: t("All_news"),
      path: "/news",
    },
    {
      title: blog.attributes.Title,
    },
  ];

  return (
    <Layout bg="white" headerBg="white" footerBg="white" pillowColor="">
      <Seo seo={seo} />
      <TitleSection text={blog.attributes.Title} />
      <Line variantColor="grey" />
      <BreadCrumbs links={breadCrumbsItems} />
      <IntroNews />
      <CarouselNews />
    </Layout>
  );
}

export async function getStaticPaths() {
  const blogsRes = await fetchAPI("/blogs", { fields: ["slug"] });

  return {
    paths: blogsRes.data.map((blog) => ({
      params: {
        slug: blog.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const matchingBlogs = await fetchAPI("/blogs", {
    populate: "*",
    filters: { slug: params.slug },
  });

  return {
    props: {
      blog: matchingBlogs.data[0],
    },
    revalidate: 1,
  };
}
