import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";
import Wrapper from "@/components/ui/Wrapper";
import Line from "@/components/ui/Line";
import IntroError from "@/components/ui/IntroError";
import ServicesSlides from "@/components/Services/ServicesSlides";

export default function ErrorPage({}) {
  const { t } = useTranslation("common");

  return (
    <>
      <Wrapper color="black" position="bottom">
        <IntroError />
      </Wrapper>
      <div className="py-3.8 container contRightFull">
        <ServicesSlides />
      </div>
      <div className="container">
        <Line variantColor="grey" />
      </div>
    </>
  );
}

ErrorPage.getLayout = function getLayout(page) {
  return (
    <Layout
      bg="grey"
      headerBg="black"
      footerBg="white"
      pillowColor={"grey"}
      variantSvg="darkSvg"
    >
      {page}
    </Layout>
  );
};
