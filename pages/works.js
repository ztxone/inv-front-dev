import React from "react";
import Layout from "../components/layout";
import {fetchAPI} from "../lib/api";
import Projects from '../components/pages/index/Projects';
import {useLayoutEffect} from 'react';

export default function  Works( {projects} ) {
  useLayoutEffect(() => {
    document.body.classList.add("bg-black");
    document.body.classList.add("text-white");
  })
  return (
    <Layout >
      <div className="mx-auto py-6">
        <Projects projects={projects} moreProjects={false}/>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [projectsRes]=await Promise.all([

    fetchAPI("/projects", {populate: "*"}),

  ]);

  return {
    props: {
      projects: projectsRes.data,
    },
    revalidate: 1,
  };
}

