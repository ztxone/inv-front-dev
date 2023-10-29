import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";

import Markdown from "react-markdown";

import { fetchAPI } from "lib/api";
import Seo from "@/components/seo";

export default function Confidence({ agreement, text }) {
  const i18n = useTranslation();
  const locale = i18n.lang;
  const seo = {
    metaTitle: agreement.attributes.Seo.metaTitle,
    metaDescription: agreement.attributes.Seo.metaDescription,
    shareImage: "",
  };

  return (
    <Layout bg="white" headerBg="white" footerBg="white" pillowColor={""} variantSvg='darkClassesSvg'>
      <Seo seo={seo} />
      <TitleSection text={agreement.attributes.Title} />
      <BreadCrumbs
        links={[
          {
            title: agreement.attributes.Title,
            path: "",
            active: false,
          },
        ]}
      />
      <Markdown className="richText container">
        {agreement.attributes.Text}
      </Markdown>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const [agreementRes] = await Promise.all([
    fetchAPI("/agreement", {
      fields: ["Title", "TextEditor"],
      locale: locale,
      populate: "*",
    }),
  ]);

  return {
    props: {
      agreement: agreementRes.data,
    },
    revalidate: 1,
  };
}
