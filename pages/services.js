import Layout from "@/components/layout";
import { fetchAPI } from "lib/api";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import Line from "@/components/ui/Line";
import Wrapper from "@/components/ui/Wrapper";
import ServicesListPage from "@/components/Services/ServicesListPage";
import ServicesSlides from "@/components/Services/ServicesSlides";
import PortfolioCarousel from "@/components/Portfolio/PortfolioCarousel";
import Seo from "@/components/seo";

export default function Services({ services, projects }) {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;

  const seo = {
    metaTitle: t("services_seo.meta_title"),
    metaDescription: t("services_seo.meta_description"),
    shareImage: "",
  };

  return (
    <>
      <Seo seo={seo} />
      <Wrapper>
        <TitleSection text={t`services.title`} variantColor="white" />
        <div className="container">
          <Line />
        </div>
        <BreadCrumbs
          links={[
            {
              title: t`services.title`,
              path: "",
              active: false,
            },
          ]}
        />
        {services && <ServicesListPage services={services} />}
      </Wrapper>

      <div className="container md:pt-15 lg:pt-20">
        <ServicesSlides />
      </div>

      {projects && <PortfolioCarousel projects={projects} />}

      <div className="container">
        <Line variantColor="grey" />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  // Run API calls in parallel
  const [servicesRes, projectsRes] = await Promise.all([
    fetchAPI("/categories", {
      populate: "*",
      fields: [
        "name",
        "slug",
        "textPart1",
        "textPart2",
        "textPart3",
        "textPart4",
      ],
      locale: locale,
      filters: {
        ShowOnMainPage: true,
      },
      pagination: {
        start: 0,
        limit: 3,
      },
    }),
    fetchAPI("/projects", {
      sort: ["ListPosition:asc"],
      populate: ["Poster", "tags"],
      fields: ["Title", "slug"],
      locale: locale,
      filters: {
        ShowOnMainPage: true,
      },
      pagination: {
        start: 0,
        limit: 3,
      },
    }),
  ]);

  return {
    props: {
      services: servicesRes.data,
      projects: projectsRes.data,
    },
    revalidate: 1,
  };
}

Services.getLayout = function getLayout(page) {
  return (
    <Layout
      bg="white"
      headerBg="black"
      footerBg="white"
      pillowColor="white"
      variantSvg="darkSvg"
    >
      {page}
    </Layout>
  );
};
