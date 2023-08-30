import Tag from "@/components/ui/Tag";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectItemWork from "../ui/ProjectItemWork";
import ProjectItemImage from "../ui/ProjectItemImage";
import Loading from "../ui/Loading";
import { getStrapiMedia } from "lib/media";
import useTranslation from "next-translate/useTranslation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchAPI } from "lib/api";
import TagItemSection from "../ui/TagItemSection";

export default function ProjectsListPortfolio() {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;
  const [projects, setProjects] = useState();
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState();

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
    const projectTag = project.attributes.tags?.data?.map(
      (tag) => tag.attributes.Name
    );
    if (!selectedTag) return project;
    if (!projectTag || projectTag.length === 0) {
      return false;
    }
    return projectTag.includes(selectedTag);
  };

  const handleCategoryClick = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
    } else {
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
        }),
        fetchAPI("/categories", {
          // Fetch categories from the API
          fields: ["name", "slug", "text"],
          populate: ["projects"],
          locale: locale,
          //   filters: {
          //     id: {
          //       $in: [13, 9, 8, 25],
          //     },
          //   },
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

  useEffect(() => {
    if (projects) {
      const tags = [
        ...projects?.filter(filterProjects).reduce((prev, curr) => {
          curr.attributes?.tags?.data?.forEach((x) =>
            prev.add(x.attributes.Name)
          );
          return prev;
        }, new Set()),
      ];
      setTags(tags);
      setSelectedTag(null);
    }
  }, [projects, selectedCategory]);

  if (!projects) {
    return <Loading />;
  }

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
      <div className="container flex flex-wrap md:md:m-0 lg:m-auto">
        {tags.length > 0 &&
          tags.map((tag) => (
            <TagItemSection
              key={tag}
              text={tag}
              color={tag === selectedTag ? "blue" : "white"}
              onClick={() => {
                setSelectedTag((prev) => (prev === tag ? null : tag));
              }}
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
      )}
    </section>
  );
}
