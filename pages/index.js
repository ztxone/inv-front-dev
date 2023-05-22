import React from "react";
import Layout from "../components/layout";
import {fetchAPI} from "../lib/api";
import About from '../components/pages/index/About';
import Projects from '../components/pages/index/Projects';
import Blog from '../components/pages/index/Blog';
import {useLayoutEffect} from 'react';
import Services from '@/components/pages/index/Services';

const Home=({projects, services}) => {
  useLayoutEffect(() => {
    document.body.classList.add("bg-black");
    document.body.classList.add("text-white");
  })

  console.log(projects);

  return (
    <Layout >
      <div className="mx-auto py-6">
        <About />
        <Services services={services} /> 
        <Projects projects={projects} moreProjects={true}/>
        <Blog />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [projectsRes, servicesRes]=await Promise.all([

    fetchAPI("/projects", {
		sort: ['ListPosition:asc'],
		populate: "*",
		fields: ['title', 'Poster', 'slug'],
		filters: {
			ShowOnMainPage: true
		}
	}),
	fetchAPI("/categories", { 
		populate: "*",
		fields: ['name', 'image', 'slug', 'text'],
		filters: {
			ShowOnMainPage: true
		} 
	})

  ]);

  return {
    props: {
      projects: projectsRes.data,
      services: servicesRes.data,
    },
    revalidate: 1,
  };
}

export default Home;