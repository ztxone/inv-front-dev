import Seo from "@/components/seo";
import Layout from "@/components/layout";

import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import ServiceIntro from "@/components/Services/ServiceIntro";
import { fetchAPI } from "lib/api";
import useTranslation from "next-translate/useTranslation";
import IntroCost from "@/components/ui/IntroCost";
import ServicesSlides from "@/components/Services/ServicesSlides";
import ProjectsList from "@/components/Projects/ProjectsList";
import Wrapper from "@/components/ui/Wrapper";
import ServicesForCategory from "@/components/Services/ServicesForCategory";
import Line from "@/components/ui/Line";

export default function Service({ category, projects }) {
  const i18n = useTranslation();
  const { t } = useTranslation("common");
  const locale = i18n.lang;

  const seo = {
    metaTitle: category.attributes.SEO[0].metaTitle,
    metaDescription: category.attributes.SEO[0].metaTitle,
    shareImage: category.attributes.image,
  };

  return (
    <>
      <Seo seo={seo} />
      <Wrapper color="grey" position="bottom">
        <TitleSection text={category.attributes.name} />
        <div className="container">
          <Line variantColor="grey" />
        </div>
        <BreadCrumbs
          links={[
            {
              title: t("services.linkServices"),
              path: "/services",
            },
            {
              title: category.attributes.name,
            },
          ]}
        />

        <ServiceIntro
          title={t("About service")}
          text={category.attributes.Description}
          image={category.attributes.image}
        />

        <ServicesForCategory parent={category.id} />

        <IntroCost />

        <div className="container contRightFull">
          <ServicesSlides />
        </div>
        <ProjectsList
          projects={projects}
          moreProjects={true}
          // projectsQuantity='100'
          focusService={category.id}
        />
      </Wrapper>
    </>
  );
}

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/categories", {
    fields: ["slug"],
  });
  const categoriesPaths = categoriesRes.data.map((category) => ({
    params: {
      slug:
        category.attributes.slug !== null
          ? category.attributes.slug.toString()
          : "",
    },
  }));
  return {
    paths: [...categoriesPaths],
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const matchingCategories = await fetchAPI("/categories", {
    //fields: ["name", "text", "Description"],
    locale: locale,
    populate: "*",
    filters: {
      slug: params.slug,
    },
  });

  const projectsRes = await fetchAPI("/projects", {
    //fields: ["name", "text", "Description"],
    locale: locale,
    populate: "*",
    filters: {
      categories: {
        slug: { $eq: params.slug },
      },
    },
  });

  return {
    props: {
      category: matchingCategories.data[0],
      projects: projectsRes.data,
    },
    revalidate: 3600,
  };
}

Service.getLayout = function getLayout(page) {
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
