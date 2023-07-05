import ProjectItem from "@/components/ui/ProjectItem";
import Tag from "@/components/ui/Tag";
import ProjectImage from "@/components/Projects/ProjectImage";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectItemWork from "../ui/ProjectItemWork";
import ProjectItemImage from "../ui/ProjectItemImage";
import Loading from "../ui/Loading";
import { getStrapiMedia } from "lib/media";
import ProjectsTitle from "./ProjectsTitle";
import Marquee from "../ui/Marquee";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import { fetchAPI } from "lib/api";
import TagItemSection from "../ui/TagItemSection";
import ProjectButton from "../ui/ProjectButton";

export default function ProjectsList({ moreProjects, projectsQuantity }) {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;
  const [projects, setProjects] = useState();
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);
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

  useEffect(() => {
    async function fetchData() {
      const [projectsRes, categoriesRes] = await Promise.all([
        fetchAPI("/projects", {
          sort: ["ListPosition:asc"],
          populate: ["Poster", "tags", "categories"],
          fields: ["Title", "slug"],
          locale: locale,
          pagination: {
            start: 0,
            limit: projectsQuantity,
          },
        }),
        fetchAPI("/categories", {
          // Fetch categories from the API
          fields: ["name", "slug", "text"],
          populate: ["projects"],
          locale: locale,
        }),
      ]);

      const categoriesData =
        categoriesRes && categoriesRes.data
          ? categoriesRes.data.filter(
              (category) =>
                category.attributes.projects.data &&
                category.attributes.projects.data.length > 0
            )
          : [];

      setProjects(projectsRes.data);
      setCategories(categoriesData);
    }
    fetchData();
  }, [locale]);

  if (!projects) {
    return <Loading />;
  }

  console.log(projects);
  return (
    <section className="bg-whisper relative z-10 rounded-5xl pb-6 pt-6 md:pt-[60px] text-blackRussian md:pb-12 lg:pt-12 lg:pb-9 lg:rounded-7xl">
      <div className="container flex flex-wrap md:md:m-0 lg:m-auto">
        {categories.map((category) => (
          <TagItemSection
            key={category.id}
            text={category.attributes.name}
            color={category.id === selectedCategory ? "blue" : "white"}
            onClick={() => handleCategoryClick(category.id)}
          />
        ))}
      </div>

      <div className="px-3.8 lg:px-24.5 lg:pb-20">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 1024: 2 }}
          className="lg:max-w-[1746px] mx-auto"
        >
          <Masonry gutter="37px">
            {filteredProjects[0] &&
              filteredProjects.map((project) => (
                <ProjectItemWork
                  key={project.id}
                  name={project.attributes.Title}
                  link={project.attributes.slug}
                >
                  <ProjectItemImage
                    link={getStrapiMedia(project.attributes.Poster)}
                    width="398"
                    height="302"
                    variant="imageBlock"
                  />{" "}
                  {project.attributes.tags.data.length > 0 && (
                    <Tag
                      text1={project.attributes.tags.data[0].attributes.Name}
                      text2={
                        project.attributes.tags.data[1]
                          ? project.attributes.tags.data[1].attributes.Name
                          : ""
                      }
                    />
                  )}
                </ProjectItemWork>
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      {moreProjects && (
        <div
          className="text-center pb-9 md:flex md:flex-col md:items-center md:pt-5
			  lg:pt-20"
        >
          <p
            className="font-interTight font-semibold text-6xl text-black opacity-5
				lg:text-6.5xl"
          >
            More
          </p>
          <ProjectButton />
        </div>
      )}
    </section>
  );
}
