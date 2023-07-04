import Layout from "@/components/layout";
import {fetchAPI} from "lib/api";
import ProjectsList from "@/components/Projects/ProjectsList";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import IntroSlides from "@/components/ui/IntroSlides";
import IntroCost from "@/components/ui/IntroCost";
import Blog from "@/components/pages/index/Blog";
import {useState} from "react";
import Line from '@/components/ui/Line';
import Services from '@/components/pages/index/Services';

export default function Portfolio({projects, categories}) {
  const {t}=useTranslation("common");
  const i18n=useTranslation();
  const locale=i18n.lang;

  return (
    <Layout bg="black" headerBg="black" footerBg="white">
      <div>
        <Line variantColor='grey' />
        <TitleSection text={t`services.title`} variantColor='white' />
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
        <Services services={services} />
        <IntroCost />
        <IntroSlides />



      </div>
    </Layout>
  );
}

