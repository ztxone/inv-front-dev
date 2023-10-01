import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import IntroSlides from "@/components/ui/IntroSlides";
import IntroCost from "@/components/ui/IntroCost";
import BlogsBlockList from "@/components/Blogs/BlogsBlockList";
import ProjectsListPortfolio from "@/components/Projects/ProjectsListPortfolio";
import Line from "@/components/ui/Line";
import Wrapper from "@/components/ui/Wrapper";
import { fetchAPI } from "lib/api";
import Seo from "@/components/seo";

export default function Portfolio({ projects, categories, blogs }) {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;

  const seo = {
    metaTitle: t("works.title"),
    metaDescription: t("works.meta_description"),
    shareImage: "",
  };

  return (
    <>
      <Seo seo={seo} />
      <Wrapper color="grey">
        <TitleSection text={t(`works.title`)} />
        <Line variantColor="grey" />
        <BreadCrumbs
          links={[
            {
              title: t(`works.title`),
              path: "",
              active: false,
            },
          ]}
        />
        <ProjectsListPortfolio projects={projects} categories={categories} />
      </Wrapper>
      <IntroSlides />
      <IntroCost />
      <BlogsBlockList
        articleColor="nero"
        titleColor="white"
        buttonColor="white"
        blogRes={blogs}
      />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const [projectsRes, categoriesRes, blogRes] = await Promise.all([
    fetchAPI("/projects", {
      sort: ["ListPosition:asc"],
      populate: ["Poster", "tags", "categories"],
      fields: ["Title", "slug"],
      locale: locale,
    }),
    fetchAPI("/categories", {
      // Fetch categories from the API
      fields: ["name", "slug", "text"],
      populate: ["projects"],
      locale: locale,
      //   filters: {
      //     id: {
      //       $in: [13, 9, 8, 25],
      //     },
      //   },
    }),
    fetchAPI("/blogs", {
      fields: ["Title", "slug", "Preview"],
      populate: ["tags", "Image_preview"],
      locale: locale,
    }),
  ]);

  return {
    props: {
      categories: categoriesRes.data,
      projects: projectsRes.data,
      blogs: blogRes.data,
    },
    revalidate: 1,
  };
}

Portfolio.getLayout = function getLayout(page) {
  return (
    <Layout bg="black" headerBg="white" footerBg="black" pillowColor="">
      {page}
    </Layout>
  );
};
