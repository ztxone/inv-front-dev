import React from "react";
import Layout from "../components/layout";
import {fetchAPI} from "../lib/api";
import Projects from '../components/pages/index/Projects';

export default function  Works( {projects} ) {
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

