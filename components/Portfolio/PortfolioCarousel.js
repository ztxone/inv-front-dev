import PillowLink from "../ui/PillowLink";
import ProjectItemImage from "../ui/ProjectItemImage";
import Title from "../ui/Title";
import {Virtual, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import ProjectItemCarousel from "./ProjectItemCarousel";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {getStrapiMedia} from "lib/media";
import useTranslation from "next-translate/useTranslation";
import Tag from "../ui/Tag";

export default function PortfolioCarousel({
  title="Смотреть портфолио",
  projects,
}) {
  const {t}=useTranslation("common");

  return (
    <div
      className="container overflow-hidden pt-21 pb-18 flex flex-col gap-10 w-full
    md:flex-row flex-wrap justify-between   max-w-[1746px] lg:mx-auto "
    >
      <Title text={title} variant="white" />
      <PillowLink
        variant="white"
        text={t("All_projects")}
        variantSvg="blueSvg"
        link="/portfolio"
      />
      <Swiper
        modules={[Navigation, Virtual, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        scrollbar={{draggable: true}}
        virtual
        className="flex pb-7 gap-2.5
        md:w-full !-mr-3.8"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectItemCarousel
              name={project.attributes.Title}
              link={project.attributes.slug}
            >
              <ProjectItemImage
                link={getStrapiMedia(project.attributes.Poster)}
                width="288"
                height="147"
                variant="imageBlock"
              />
              {project.attributes.tags.data.length>0&&(
                <Tag
                  text1={project.attributes.tags.data[0].attributes.Name}
                  text2={
                    project.attributes.tags.data[1]
                      ? project.attributes.tags.data[1].attributes.Name
                      :""
                  }
                />
              )}
            </ProjectItemCarousel>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
