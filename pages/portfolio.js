import Layout from "@/components/layout";
import { fetchAPI } from "lib/api";
import ProjectsList from "@/components/Projects/ProjectsList";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import useTranslation from "next-translate/useTranslation";
import ProjectWorks from "@/components/pages/works/ProjectsWork";
import TagItemSection from "@/components/ui/TagItemSection";
import IntroSlides from "@/components/ui/IntroSlides";
import IntroCost from "@/components/ui/IntroCost";
import Blog from "@/components/pages/index/Blog";
import { useState } from "react";

export default function Portfolio({ projects, categories, blogs }) {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log(blogs);

  // Filter projects based on the selected category
  const filteredProjects = selectedCategory
    ? projects.filter((project) => {
        const projectCategories = project.attributes.categories.data;
        // Filter out projects that don't have any categories
        if (!projectCategories || projectCategories.length === 0) {
          return false;
        }
        const projectCategoryIds = projectCategories.map(
          (category) => category.id
        );
        return projectCategoryIds.includes(selectedCategory);
      })
    : projects;

  const handleCategoryClick = (category) => {
    if (category === selectedCategory) {
      // If the category is already selected, clear the filter
      setSelectedCategory(null);
    } else {
      // Otherwise, select the clicked category
      setSelectedCategory(category);
    }
  };

  return (
    <Layout bg="white" headerBg="white" footerBg="black">
      <div className="bg-whisper text-black">
        <div
          className="px-3.8 pb-15
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
          <div className="flex flex-wrap md:w-4/5">
            {categories.map((category) => (
              <TagItemSection
                key={category.id}
                text={category.attributes.name}
                color={category.id === selectedCategory ? "blue" : "white"}
                onClick={() => handleCategoryClick(category.id)}
              />
            ))}
          </div>
        </div>
        {/* <ProjectWorks /> */}
        <ProjectsList projects={filteredProjects} moreProjects={false} />
        <div
          className="bg-black -mt-7 pt-10.5
          md:pt-18
          lg:pt-33"
        >
          <IntroSlides />
          <IntroCost />
          <Blog
            blogs={blogs}
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

export async function getStaticProps({ locale }) {
  // Run API calls in parallel

  const [projectsRes, categoriesRes, blogsRes] = await Promise.all([
    fetchAPI("/projects", {
      sort: ["ListPosition:asc"],
      populate: ["Poster", "tags", "categories"],
      fields: ["Title", "slug"],
      locale: locale,
    }),
    fetchAPI("/categories", {
      // Fetch categories from the API
      fields: ["name", "slug", "text"],
      populate: ["projects"],
      locale: locale,
      filter: {
        projects_ne: [], // Filter categories where the projects array is not empty
      },
    }),
    fetchAPI("/blogs", {
      fields: ["Title", "slug", "Preview"],
      populate: ["tags", "Image_preview"],
      locale: locale,
    }),
  ]);

  const categories =
    categoriesRes && categoriesRes.data
      ? categoriesRes.data.filter(
          (category) =>
            category.attributes.projects.data &&
            category.attributes.projects.data.length > 0
        )
      : [];
  return {
    props: {
      projects: projectsRes.data,
      categories,
      blogs: blogsRes.data,
    },
    revalidate: 1,
  };
}
