import ProjectItem from "@/components/ui/ProjectItem";
import Tag from "@/components/ui/Tag";
import Marquee from "@/components/ui/Marquee";
import ProjectItemImage from "@/components/ui/ProjectItemImage";
import ProjectButton from "@/components/ui/ProjectButton";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectsTitle from "@/components/Projects/ProjectsTitle";
import { getStrapiMedia } from "lib/media";
import Loading from "../ui/Loading";
import Image from "next/image";

export default function ProjectsListForMain({
  projects,
  moreProjects = false,
}) {
  console.log(projects);
  if (!projects) {
    return <Loading />;
  }
  console.log(projects);

  return (
    <section className="pt-16 md:pt-[60px] text-blackRussian md:pb-12 lg:pt-36 lg:pb-9">
      <div className="container">
        <div className="lg:pb-20">
          <ProjectsTitle />

          <ResponsiveMasonry
            className="pt-15 pb-3.8 border-t border-black-russian md:pt-10 
          lg:pt-12"
            columnsCountBreakPoints={{ 350: 1, 750: 1, 1024: 2 }}
          >
            <Masonry gutter="30px">
              {projects.map((project, i) => {
                const posterHeight =
                  project.attributes.Poster_for_mainPage.data.attributes.height;
                const posterWidth =
                  project.attributes.Poster_for_mainPage.data.attributes.width;

                const aspectRatio = (600 / posterWidth) * posterHeight;
                return (
                  <ProjectItem
                    key={project.id}
                    name={project.attributes.Title}
                    link={project.attributes.slug}
                  >
                    <div className="rounded-l15 relative">
                      <Image
                        src={getStrapiMedia(
                          project.attributes.Poster_for_mainPage
                            ? project.attributes.Poster_for_mainPage
                            : project.attributes.Poster
                        )}
                        width="600"
                        height={aspectRatio}
                        alt={project.attributes.Title}
                        className="rounded-l15 relative w-full"
                      />
                      {project.attributes.tags.data[0] && (
                        <div className="absolute top-5 left-5">
                          <Tag
                            text1={
                              project.attributes.tags.data[0].attributes.Name
                            }
                            text2={
                              project.attributes.tags.data[1]
                                ? project.attributes.tags.data[1].attributes
                                    .Name
                                : ""
                            }
                          />
                        </div>
                      )}
                    </div>
                  </ProjectItem>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>

          {moreProjects && <ProjectButton />}
        </div>
      </div>
      <Marquee />
    </section>
  );
}
