import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import IntroSlides from "@/components/ui/IntroSlides";
import IntroCost from "@/components/ui/IntroCost";
import BlogsBlockList from "@/components/Blogs/BlogsBlockList";
import ProjectsListPortfolio from "@/components/Projects/ProjectsListPortfolio";

export default function Portfolio({ projects, categories }) {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;

  return (
    <Layout bg="white" headerBg="white" footerBg="black">
      <div className="bg-whisper text-black">
        <div
          className="pb-15
			md:pb-[28px] lg:max-w-[1746px] mx-auto
      lg:px-0"
        >
          <TitleSection text={t`works.title`} />
          <BreadCrumbs
            links={[
              {
                title: t`works.title`,
                path: "",
                active: false,
              },
            ]}
          />
        </div>
        <ProjectsListPortfolio />
        <div
          className="bg-black -mt-7 pt-10.5
          md:pt-18
          lg:pt-33"
        >
          <IntroSlides />
          <IntroCost />
          <BlogsBlockList
            articleColor="nero"
            titleColor="white"
            buttonColor="white"
          />
        </div>

        {/* <ProjectsListOld projects={projects}/> */}
      </div>
    </Layout>
  );
}
