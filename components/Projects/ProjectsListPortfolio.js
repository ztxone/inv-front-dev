import Tag from "@/components/ui/Tag";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectItemWork from "../ui/ProjectItemWork";
import ProjectItemImage from "../ui/ProjectItemImage";
import { getStrapiMedia } from "lib/media";
import useTranslation from "next-translate/useTranslation";
import { useCallback, useEffect, useState } from "react";
import TagItemSection from "../ui/TagItemSection";

export default function ProjectsListPortfolio({
  projects,
  categories,
  tag = "",
}) {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const filterProjects = useCallback(
    (project) => {
      if (!selectedCategory) return project;
      const projectCategories = project.attributes.categories.data;
      if (!projectCategories || projectCategories.length === 0) {
        return false;
      }
      const projectCategoryIds = projectCategories.map(
        (category) => category.id
      );
      return projectCategoryIds.includes(selectedCategory);
    },
    [selectedCategory]
  );

  const filterByTag = (project) => {
    if (!tag) return true;
    const projectTag = project.attributes.tags?.data?.map(
      (tag) => tag.attributes.Name
    );
    if (!projectTag || projectTag.length === 0) {
      return false;
    }
    return projectTag.includes(tag);
  };

  const handleCategoryClick = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <section className="bg-whisper relative z-10 rounded-5xl pb-25 pt-6 md:pt-[60px] text-blackRussian md:pb-12 lg:pt-12 lg:pb-9 lg:rounded-7xl">
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
      {projects && (
        <div className="px-3.8 lg:px-24.5 lg:pb-20">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 1024: 2 }}
            className="lg:max-w-[1746px] mx-auto"
          >
            <Masonry gutter="37px">
              {projects
                .filter(filterProjects)
                .filter(filterByTag)
                .map((project) => (
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
                      <div
                        className={
                          "z-2 relative flex gap-1 uppercase flex-wrap"
                        }
                      >
                        {project.attributes.tags.data.map((x) => {
                          return (
                            <Tag
                              key={x.attributes.Name}
                              text={x.attributes.Name}
                              href={x.attributes.slug}
                            />
                          );
                        })}
                      </div>
                    )}
                  </ProjectItemWork>
                ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      )}
    </section>
  );
}
