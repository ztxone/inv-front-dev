import React from 'react';
import Layout from '../components/layout';
import {fetchAPI} from '../lib/api';
import ProjectWorks from '@/components/pages/works/ProjectsWork';
import IntroProjects from '@/components/pages/works/IntroProjects';


export default function Works({projects}) {
  return (
    <Layout>
      <section className='px-3.8 py bg-whisper rounded-b-5xl pb-12 text-black'>
        <div className='container mx-auto'>
        <IntroProjects/>
        <ProjectWorks />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [projectsRes] = await Promise.all([
    fetchAPI('/projects', {populate: '*'}),
  ]);

  return {
    props: {
      projects: projectsRes.data,
    },
    revalidate: 1,
  };
}
