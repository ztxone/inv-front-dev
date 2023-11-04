import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import useTranslation from "next-translate/useTranslation";
import Line from "@/components/ui/Line";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import IntroNews from "@/components/News/IntroNews";
import CarouselNews from "@/components/News/CarouselNews";
import { fetchAPI } from "lib/api";
import Seo from "@/components/seo";
import QuoteBlock from "@/components/News/QuoteBlock";
import ReactMarkdown from "react-markdown";
import LoadFileBlock from "@/components/News/LoadFileBlock";
import BlogsBlockList from "@/components/Blogs/BlogsBlockList";
import Video from "@/components/Projects/Video";

export default function Blog({ blog, blogsOthers }) {
  const { t } = useTranslation("common");
  const seo = {
    metaTitle: blog.attributes.Title,
    metaDescription: blog.attributes.Text,
    shareImage: blog.attributes.Image_preview,
  };
  //console.log(blogsOthers);
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
        <div
          className="container pt-12 !max-w-screen-lg"
          dangerouslySetInnerHTML={{ __html: blog.attributes.Text }}
        />
      )}
      {blog.attributes.Advertise && (
        <div className="container pt-12 !max-w-screen-lg">
          <ReactMarkdown className=" !max-w-screen-lg markDown opacityMarkdown">
            {blog.attributes.Advertise}
          </ReactMarkdown>
        </div>
      )}
      <CarouselNews slides={blog.attributes.PhotoSlides} blog={blog} />
      {blog.attributes.Text2 && (
        <div
          className="container pt-12 !max-w-screen-lg"
          dangerouslySetInnerHTML={{ __html: blog.attributes.Text2 }}
        />
      )}
      {blog.attributes.File?.data && (
        <LoadFileBlock file={blog.attributes.File.data} />
      )}
      <div className="mx-auto !max-w-screen-lg">
        <Line variantColor="grey" />
      </div>
      {blog.attributes.Quote && <QuoteBlock quote={blog.attributes.Quote} />}
      <div className="mx-auto !max-w-screen-lg">
        <Line variantColor="grey" />
      </div>

      {blog.attributes.Video?.data && (
        <div className="pt-[52px]">
          <Video
            poster={blog.attributes.Poster}
            videofile={blog.attributes.Video}
          />
        </div>
      )}

      {blog.attributes.Text3 && (
        <div
          className="container pt-12 !max-w-screen-lg"
          dangerouslySetInnerHTML={{ __html: blog.attributes.Text3 }}
        />
      )}
      <BlogsBlockList
        articleColor="inherit"
        titleColor="black"
        buttonColor="black"
        blogRes={blogsOthers}
        titleOthers={true}
      />
      <Line variantColor="grey" />
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

export async function getStaticProps({ params, locale }) {
  const [matchingBlogs, blogsOthersRes] = await Promise.all([
    fetchAPI("/blogs", {
      filters: { slug: params.slug },
      locale: locale,
      populate: "*",
    }),
    fetchAPI("/blogs", {
      fields: ["Title", "slug", "Preview"],
      populate: ["tags", "Image_preview"],
      pagination: {
        start: 0,
        limit: 3,
      },
      locale: locale,
    }),
  ]);

  return {
    props: {
      blog: matchingBlogs.data[0],
      blogsOthers: blogsOthersRes.data,
    },
    revalidate: 1,
  };
}

Blog.getLayout = function getLayout(page) {
  return (
    <Layout bg="white" headerBg="white" footerBg="white" pillowColor="">
      {page}
    </Layout>
  );
};
