import Seo from "@/components/seo";
import Layout from "@/components/layout";

import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import ServiceIntro from "@/components/Services/ServiceIntro";
import { fetchAPI } from "lib/api";
import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";

// todo Тестовые данные удалить
const breadCrumbsItems = [
  {
    title: "Главная",
    path: "/index",
  },
  {
    title: "Услуги",
    path: "/products",
  },
  {
    title: "Архитектурная 3D визуализация",
  },
];

export default function Service({ category }) {
  const i18n = useTranslation();

  const locale = i18n.lang;

  console.log(category);
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };
  //console.log(category);

  return (
    <Layout bg="white" headerBg="white" footerBg="black">
      {/* <Seo seo={seo} /> */}
      <div className="lg:max-w-[1920px]">
        <div
          className="px-3.8
	  lg:px-21"
        >
          <TitleSection text={category.name} />
          <BreadCrumbs links={breadCrumbsItems} />
        </div>
        <ServiceIntro title="об услуге" text={category.Description} />
      </div>
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

export async function getStaticProps({ params }) {
  const matchingCategories = await fetchAPI("/categories", {
    fields: ["name", "text", "Description"],
    populate: "*",
    filters: {
      slug: params.slug,
      //ShowOnMainPage: true,
      //locale: locale,
    },
  });

  return {
    props: {
      category: matchingCategories.data[0],
    },
    revalidate: 1,
  };
}
