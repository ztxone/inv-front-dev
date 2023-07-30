import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";
import { fetchAPI } from "lib/api";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import Line from "@/components/ui/Line";
import FormBrief from "@/components/Brief/FormBrief";

export default function Brief() {
  const { t } = useTranslation("common");

  return (
    <Layout bg="white" headerBg="white" footerBg="white">
      <TitleSection text={t("brief.title_fill")} />
      <Line variantColor="grey" />
      <BreadCrumbs
        links={[
          {
            title: t("brief.title_fill"),
          },
        ]}
      />
      <FormBrief />
      <Line variantColor="grey" />
    </Layout>
  );
}
