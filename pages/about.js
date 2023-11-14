import Layout from "@/components/layout";
import { fetchAPI } from "lib/api";
import IntroCost from "@/components/ui/IntroCost";
import useTranslation from "next-translate/useTranslation";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import ProjectsList from "@/components/Projects/ProjectsList";
import BlogsBlockList from "@/components/Blogs/BlogsBlockList";
import Wrapper from "@/components/ui/Wrapper";
import Line from "@/components/ui/Line";
import AboutIntro from "@/components/About/AboutIntro";
import Seo from "@/components/seo";
import ProjectsTitle from "@/components/Projects/ProjectsTitle";

export default function About({ about, projects, blogs }) {
  const { t } = useTranslation("common");
  const seo = {
    metaTitle: about.attributes.Seo.metaTitle,
    metaDescription: about.attributes.Seo.metaDescription,
    shareImage: "",
  };

  return (
    <>
      <Seo seo={seo} />
      <Wrapper color="grey">
        <TitleSection text={about.attributes.Title} />
        <div className="container">
          <Line variantColor="grey" />
        </div>
        <BreadCrumbs
          links={[
            {
              title: about.attributes.Title,
              path: "",
              active: false,
            },
          ]}
        />

        <AboutIntro
          title1={about.attributes.Title}
          text1={about.attributes.AboutPurpose}
          title2={t(`about.aboutOpportunities`)}
          text2={about.attributes.AboutOpportunities}
        />
        <IntroCost />
        <div className="container py-10 lg:pt-15">
          <ProjectsTitle />
          <Line width="full" />
        </div>
        <ProjectsList moreProjects={true} projects={projects} />
      </Wrapper>
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
  const [aboutRes, projectsRes, blogRes] = await Promise.all([
    fetchAPI("/about", {
      populate: "*",
      locale: locale,
    }),
    fetchAPI("/projects", {
      sort: ["ListPosition:asc"],
      populate: {
        Poster: "*",
        tags: "*",
      },
      fields: ["title", "slug"],
      pagination: {
        start: 0,
        limit: 6,
      },
    }),
    fetchAPI("/blogs", {
      fields: ["Title", "slug", "Preview"],
      populate: ["tags", "Image_preview"],
      locale: locale,
    }),
  ]);

  return {
    props: {
      about: aboutRes.data,
      projects: projectsRes.data,
      blogs: blogRes.data,
    },
    revalidate: 1,
  };
}

About.getLayout = function getLayout(page) {
  return (
    <Layout
      bg="black"
      headerBg="white"
      footerBg="black"
      pillowColor="dark"
      variantSvg="darkSvg"
    >
      {page}
    </Layout>
  );
};
