import Seo from "@/components/seo";
import Layout from "@/components/layout";
import { fetchAPI } from "lib/api";
import { getStrapiMedia } from "lib/media";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import TagBlock from "@/components/Projects/TagBlock";
import Line from "@/components/ui/Line";
import ProjectCarousel from "@/components/Projects/ProjectCarousel";
import ProjectAbout from "@/components/Projects/ProjectAbout";
import IntroCost from "@/components/ui/IntroCost";
import PortfolioCarousel from "@/components/Portfolio/PortfolioCarousel";

function Project({ project, projectsOther, categories }) {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;
  //const imageUrl = getStrapiMedia(project.attributes.Poster);

  const seo = {
    metaTitle: t("seo.project") + project.attributes.Seo[0].metaTitle,
    metaDescription: project.attributes.Seo[0].metaDescription,
    shareImage: project.attributes.Poster,
    project: true,
  };

  const breadCrumbsItems = [
    {
      title: t("works.title"),
      path: "/portfolio",
    },
    {
      title: project.attributes.Title,
    },
  ];
  return (
    <>
      <Seo seo={seo} />

      <TitleSection text={project.attributes.Title} />
      {project.attributes.tags.data[0] && (
        <TagBlock tags={project.attributes.tags.data} />
      )}
      <div className="container">
        <Line variantColor="grey" />
      </div>
      <BreadCrumbs links={breadCrumbsItems} />

      <ProjectCarousel
        photos={project.attributes.ProjectSliderFotos.data}
        poster={project.attributes.Poster}
        videoFiles={project.attributes.VideoFile}
      />

      <ProjectAbout
        task={project.attributes.ProjectTask}
        done={project.attributes.ProjectDone}
        CustomerName={project.attributes.CustomerName}
        CustomerUrl={project.attributes.CustomerUrl}
      />

      <div className="container">
        <Line variantColor="grey" />
      </div>
      <div className="py-10 md:py-15 lg:py-18">
        <IntroCost />
      </div>

      {/* <ProjectsListBlock projects={projectsOther} /> */}
      <PortfolioCarousel title="Другие проекты" projects={projectsOther} />
      <div className="container">
        <Line variantColor="grey" />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const projectsSlug = await fetchAPI("/projects", {
    fields: ["slug"],
  });
  const projectsSlugPath = projectsSlug.data.map((project) => ({
    params: {
      slug:
        project.attributes.slug !== null
          ? project.attributes.slug.toString()
          : "",
    },
  }));

  return {
    paths: [...projectsSlugPath],
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const projectsRes = await fetchAPI("/projects", {
    locale: locale,
    populate: "*",
    fields: ["Title", "slug", "CustomerName", "CustomerUrl"],
    filters: {
      slug: params.slug,
    },
  });
  const projectsOtherRes = await fetchAPI("/projects", {
    fields: ["Title", "slug"],
    locale: locale,
    populate: ["Poster", "tags"],
    pagination: {
      start: 0,
      limit: 6,
    },
  });
  const categoriesRes = await fetchAPI("/categories");

  return {
    props: {
      project: projectsRes.data[0],
      projectsOther: projectsOtherRes.data,
      categories: categoriesRes,
    },
    revalidate: 1,
  };
}
Project.getLayout = function getLayout(page) {
  return (
    <Layout
      bg="white"
      headerBg="white"
      footerBg="white"
      pillowColor="white"
      variantSvg="dark"
    >
      {page}
    </Layout>
  );
};
export default Project;
