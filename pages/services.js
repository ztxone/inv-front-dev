import Layout from "@/components/layout";
import {fetchAPI} from "lib/api";
import ProjectsList from "@/components/Projects/ProjectsList";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import IntroSlides from "@/components/ui/IntroSlides";
import Blog from "@/components/pages/index/Blog";
import {useState} from "react";
import Line from "@/components/ui/Line";
import Container from "@/components/ui/Container";
import PortfolioCarusel from "@/components/Portfolio/PortfolioCarusel";
import ServicesListPage from "@/components/Services/ServicesListPage";

export default function Services({services}) {
  const {t}=useTranslation("common");
  const i18n=useTranslation();
  const locale=i18n.lang;

  return (
    <Layout bg="white" headerBg="black" footerBg="white">
      <div>
        <Container>
          <TitleSection text={t`services.title`} variantColor="white" />
          <Line />
          <BreadCrumbs
            links={[
              {
                title: t`services.title`,
                path: "",
                active: false,
              },
            ]}
          />
          <ServicesListPage services={services} />
        </Container>
        <IntroSlides />
        <PortfolioCarusel />
        <Line variantColor="grey" />
      </div>
    </Layout>
  );
}

export async function getStaticProps({locale}) {
  // Run API calls in parallel
  const [servicesRes]=await Promise.all([
    fetchAPI("/categories", {
      populate: "*",
      fields: ["name", "slug", "text"],
      locale: locale,
      filters: {
        ShowOnMainPage: true,
      },
    }),
  ]);

  return {
    props: {
      services: servicesRes.data,
    },
    revalidate: 1,
  };
}
