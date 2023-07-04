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
import ServiceBlock from "@/components/SeparateService/ServiceBlock";
import ServicesChildrenItem from "@/components/Services/ServicesChildrenItem";
import ServicesChildren from "@/components/Services/ServicesChildren";

export default function Service({ category }) {
  const i18n = useTranslation();
  const { t } = useTranslation("common");
  const locale = i18n.lang;

  //console.log(category);
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  };

  return (
    <Layout bg="white" headerBg="white" footerBg="black">
      {/* <Seo seo={seo} /> */}
      <div className="lg:max-w-[1920px]">
        <TitleSection text={category.attributes.name} />
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
      </div>

      {!category.attributes.category.data && (
        <ServicesChildren parent={category.id} />
      )}

      <div className="hidden md:block px-3.8 pt-20">
        <IntroCost />
        <ServicesSlides />
      </div>

      <ProjectsList moreProjects={true} projectsQuantity="6" />
    </Layout>
  );
}

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/categories", {
    fields: ["slug"],
  });

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        //slug: category.attributes.slug,
        slug:
          category.attributes.slug !== null
            ? category.attributes.slug.toString()
            : "",
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const matchingCategories = await fetchAPI("/categories", {
    fields: ["name", "text", "Description"],
    locale: locale,
    populate: "*",
    filters: {
      slug: params.slug,
    },
  });

  return {
    props: {
      category: matchingCategories.data[0],
    },
    revalidate: 1,
  };
}
