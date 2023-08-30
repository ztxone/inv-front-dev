import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import TagBlock from "@/components/Projects/TagBlock";
import Line from "@/components/ui/Line";
import Video from "@/components/Projects/Video";
import ProjectCarousel from "@/components/Projects/ProjectCarousel";
import ProjectAbout from "@/components/Projects/ProjectAbout";
import IntroCost from "@/components/ui/IntroCost";
import PortfolioCarousel from "@/components/Portfolio/PortfolioCarousel";

export default function Portfolio({ projects }) {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;

  const breadCrumbsItems = [
    {
      title: "Портфолио",
      path: "/portfolio",
    },
    {
      title: " Home of Cool™",
    },
  ];

  return (
    <>
      <TitleSection text="Home of Cool™️" />
      <TagBlock text="3D анимация" />
      <Line variantColor="grey" />
      <BreadCrumbs links={breadCrumbsItems} />
      <Video />
      <ProjectCarousel />
      <ProjectAbout />
      <Line variantColor="grey" />
      <IntroCost />
      <PortfolioCarousel title="Другие проекты" />
      <Line variantColor="grey" />
    </>
  );
}

Portfolio.getLayout = function getLayout(page) {
  return (
    <Layout bg="white" headerBg="white" footerBg="white" pillowColor="">
      {page}
    </Layout>
  );
};
