import React from "react";
import Layout from "@/components/layout";
import { fetchAPI } from "lib/api";
import About from "@/components/pages/index/About";
import Projects from "@/components/pages/index/Projects";
import Blog from "@/components/pages/index/Blog";
import Services from "@/components/pages/index/Services";
import ProjectsMainList from "@/components/Projects/ProjectsMainList";

const Home = ({ projects, services, servicesAbout, about }) => {
  return (
    <Layout bg="black" headerBg="black" footerBg="black">
      {/* <div className="mx-auto py-6"> */}
      <About about={about} servicesAbout={servicesAbout} />
      <Services services={services} />
      <ProjectsMainList projects={projects} moreProjects={true} />
      {/* <Projects projects={projects} moreProjects={true}/> */}
      <Blog />
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  // Run API calls in parallel
  const [projectsRes, servicesRes, servicesAboutRes, aboutRes] =
    await Promise.all([
      fetchAPI("/projects", {
        sort: ["ListPosition:asc"],
        populate: {
          Poster: "*",
          tags: "*",
        },
        fields: ["title", "slug"],
        locale: locale,
        filters: {
          ShowOnMainPage: true,
        },
      }),
      fetchAPI("/categories", {
        populate: "*",
        fields: ["name", "slug", "text"],
        locale: locale,
        filters: {
          ShowOnMainPage: true,
        },
      }),
      fetchAPI("/categories", {
        filters: {
          ShowAsSlide: true,
        },
        fields: ["name", "slug"],
        locale: locale,
        populate: {
          Slides: {
            sort: ["SlidePosition:asc"],
            populate: "*",
          },
        },
      }),
      fetchAPI("/about", {
        fields: ["SloganPart1", "SloganPart2"],
        locale: locale,
      }),
    ]);

  return {
    props: {
      projects: projectsRes.data,
      services: servicesRes.data,
      servicesAbout: servicesAboutRes.data,
      about: aboutRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
