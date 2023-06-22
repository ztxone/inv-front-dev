import Seo from "@/components/seo";
import Layout from "@/components/layout";

import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import ServiceIntro from "@/components/Services/ServiceIntro";
import { fetchAPI } from "lib/api";
import useTranslation from "next-translate/useTranslation";

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
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  };
  console.log(category);

  return (
    <Layout bg="white" headerBg="white" footerBg="black">
      {/* <Seo seo={seo} /> */}
      <div className="lg:max-w-[1920px]">
        <div
          className="px-3.8
	  lg:px-21"
        >
          <TitleSection text="Архитектурная 3D&nbsp;визуализация" />
          <BreadCrumbs links={breadCrumbsItems} />
        </div>
        <ServiceIntro
          title="об услуге"
          text="Архитектурная 3D визуализация это доступный и&nbsp;выгодный способ демонстрации внешнего вида ваших проектов от&nbsp;интерьера квартиры до&nbsp;жилого комплекса. Предметная 3D визуализация это отличный вариант презентовать ваш товара, подготовить рекламный контент или показать внутреннее устройство вашего продукта. 3D моделирование будет полезно в&nbsp;прототипирование для дальнейшего изготовления модели на&nbsp;3D принтере или фрезеровки."
        />
      </div>
    </Layout>
  );
}

export async function getStaticPaths({ locale }) {
  const categoriesRes = await fetchAPI("/categories", {
    fields: ["slug"],
    locale: locale,
  });
  //console.log(categoriesRes);
  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const matchingCategories = await fetchAPI("/categories", {
    filters: { slug: params.slug },
    fields: ["name", "text"],
    //locale: locale,
    // populate: {
    //   projects: {
    //     populate: "*",
    //   },
    // },
  });

  return {
    props: {
      category: matchingCategories.data[0],
    },
    revalidate: 1,
  };
}
