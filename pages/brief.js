import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";
import {fetchAPI} from "lib/api";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import Line from "@/components/ui/Line";
import FormBrief from "@/components/Brief/FormBrief";

export default function Brief({ categories, visobjs }) {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;
  console.log(visobjs);

  return (
    <Layout bg="white" headerBg="white" footerBg="white" colorLineHeader='grey'>
      <TitleSection text={t("brief.title_fill")} />
      <Line variantColor="grey" />
      <BreadCrumbs
        links={[
          {
            title: t("brief.title_fill"),
          },
        ]}
      />
      <FormBrief categories={categories} visobjs={visobjs} />
      <Line variantColor="grey" />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const [categoriesRes, visobjRes] = await Promise.all([
    fetchAPI("/categories", {
      populate: "*",
      fields: ["name", "slug"],
      locale: locale,
    }),
    fetchAPI("/visualization-objects", {
      populate: "*",
      locale: locale,
    }),
  ]);

  return {
    props: {
      categories: categoriesRes.data,
      visobjs: visobjRes.data,
    },
    revalidate: 1,
  };
}
