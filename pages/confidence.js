import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";

import Markdown from "react-markdown";

import { fetchAPI } from "lib/api";

export default function Confidence({ agreement }) {
  const i18n = useTranslation();
  const locale = i18n.lang;

  return (
    <Layout bg="white" headerBg="white" footerBg="white">
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

      <div className="container richText">
        <Markdown>{agreement.attributes.Text}</Markdown>
      </div>

    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const [agreementRes] = await Promise.all([
    fetchAPI("/agreement", {
      fields: ["Title", "Text"],
      locale: locale,
    }),
  ]);

  return {
    props: {
      agreement: agreementRes.data,
    },
    revalidate: 1,
  };
}
