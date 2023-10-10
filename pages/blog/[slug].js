import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import useTranslation from "next-translate/useTranslation";
import Line from "@/components/ui/Line";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import IntroNews from "@/components/News/IntroNews";
import CarouselNews from "@/components/News/CarouselNews";
import { fetchAPI } from "lib/api";
import Seo from "@/components/seo";
import VideoBlock from "./VideoBlock";
import QuoteBlock from "./QuoteBlock";
import ReactMarkdown from "react-markdown";
import LoadFileBlock from "./LoadFileBlock";

export default function Blog({ blog }) {
  const { t } = useTranslation("common");
  const seo = {
    metaTitle: blog.attributes.Title,
    metaDescription: blog.attributes.Text,
    shareImage: blog.attributes.Image_preview,
  };

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
    <>
      <Seo seo={seo} />
      <TitleSection text={blog.attributes.Title} />
      <Line variantColor="grey" />
      <BreadCrumbs links={breadCrumbsItems} />
      <IntroNews blog={blog} />
      {blog.attributes.Text && (
        <div className="container pt-12">
          <ReactMarkdown className="markDown">
            {blog.attributes.Text}
          </ReactMarkdown>
        </div>
      )}
      <CarouselNews slides={blog.attributes.PhotoSlides} blog={blog} />
      {blog.attributes.Text2 && (
        <div className="container pt-12">
          <ReactMarkdown className="markDown">
            {blog.attributes.Text2}
          </ReactMarkdown>
        </div>
      )}
      {blog.attributes.File?.data && (
        <LoadFileBlock file={blog.attributes.File.data} />
      )}
      <Line variantColor="grey" />
      {blog.attributes.Quote && <QuoteBlock quote={blog.attributes.Quote} />}
      <Line variantColor="grey" />

      {blog.attributes.Video?.data && (
        <VideoBlock
          blog={blog}
          video={blog.attributes.Video}
          poster={blog.attributes.Image_preview}
        />
      )}
      {blog.attributes.Text3 && (
        <div className="container pt-12">
          <ReactMarkdown className="markDown">
            {blog.attributes.Text3}
          </ReactMarkdown>
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const blogsRes = await fetchAPI("/blogs", { fields: ["slug"] });
  const blogPaths = blogsRes.data.map((blog) => ({
    params: {
      slug: blog.attributes.slug,
    },
  }));

  const blogPathsEng = blogsRes.data.map((blog) => ({
    params: {
      slug: blog.attributes.slug,
    },
    locale: "en",
  }));

  return {
    paths: [...blogPaths, ...blogPathsEng],
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

Blog.getLayout = function getLayout(page) {
  return (
    <Layout bg="white" headerBg="white" footerBg="black" pillowColor="">
      {page}
    </Layout>
  );
};
