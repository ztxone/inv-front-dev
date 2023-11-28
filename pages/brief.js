import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";
import { fetchAPI } from "lib/api";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import Line from "@/components/ui/Line";
import FormBrief from "@/components/Brief/FormBrief";
import Seo from "@/components/seo";

export default function Brief({ categories, visobjs, seoBrief }) {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;

  const seo = {
    metaTitle: seoBrief.attributes.SeoBrief.metaTitle,
    metaDescription: seoBrief.attributes.SeoBrief.metaDescription,
    //shareImage: project.attributes.Poster,
  };

  return (
    <>
      <Seo seo={seo} />
      <TitleSection text={t("brief.title_fill")} />
      <div className="container">
        <Line variantColor="grey" />
      </div>
      <BreadCrumbs
        links={[
          {
            title: t("brief.title_fill"),
          },
        ]}
      />

      <FormBrief categories={categories} visobjs={visobjs} />

      <div className="container">
        <Line variantColor="grey" />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const [categoriesRes, visobjRes, seoBriefRes] = await Promise.all([
    fetchAPI("/categories", {
      fields: ["name", "slug"],
      locale: locale,
    }),
    fetchAPI("/visualization-objects", {
      populate: "*",
      locale: locale,
    }),
    fetchAPI("/about", {
      fields: ["Title"],
      populate: ["SeoBrief"],

      locale: locale,
    }),
  ]);

  return {
    props: {
      categories: categoriesRes.data,
      visobjs: visobjRes.data,
      seoBrief: seoBriefRes.data,
    },
    revalidate: 3600,
  };
}

Brief.getLayout = function getLayout(page) {
  return (
    <Layout bg="white" headerBg="white" footerBg="white" pillowColor={"grey"}>
      {page}
    </Layout>
  );
};
