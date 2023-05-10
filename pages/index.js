import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import About from '../components/pages/index/About';
import Services from '../components/pages/index/Services';
import Project from '../components/pages/index/Projects';
import Blog from '../components/pages/index/Blog';
import {useLayoutEffect} from 'react';

const Home = ({ articles, projects, categories, homepage }) => {
	useLayoutEffect(() => {
		document.body.classList.add("bg-black");
	  })
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
	  <div className="mx-auto py-6">
        <About />
        <Services />
        <Projects projects={projects} />
        <Blog />
      </div>
	  <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.attributes.hero.title}</h1>
          {/*<Articles articles={articles} />*/}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, projectsRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
	fetchAPI("/projects", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
	  projects: projectsRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;