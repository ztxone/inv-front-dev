import Layout from "@/components/layout";
import { fetchAPI } from "lib/api";
//import Projects from "@/components/pages/index/Projects";
import IntroCost from "@/components/ui/IntroCost";
import useTranslation from "next-translate/useTranslation";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import ProjectsList from "@/components/Projects/ProjectsList";
import BlogsBlockList from "@/components/Blogs/BlogsBlockList";
import Wrapper from "@/components/ui/Wrapper";
import Line from "@/components/ui/Line";
import AboutIntro from "@/components/About/AboutIntro";

export default function About({ about }) {
  const { t } = useTranslation("common");

  return (
    <Layout bg="black" headerBg="white" footerBg="black">
      <Wrapper color="grey">
        <TitleSection text={about.attributes.Title} />
        <Line variantColor="grey" />
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
        <ProjectsList moreProjects={true} />
      </Wrapper>
      <BlogsBlockList
        articleColor="nero"
        titleColor="white"
        buttonColor="white"
      />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const [aboutRes, projectsRes] = await Promise.all([
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
  ]);

  return {
    props: {
      about: aboutRes.data,
      projects: projectsRes.data,
    },
    revalidate: 1,
  };
}
