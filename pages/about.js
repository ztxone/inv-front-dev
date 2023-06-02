import React from 'react';
import Layout from '../components/layout';
// import {fetchAPI} from "../lib/api";
// import Projects from '../components/pages/index/Projects';
import Intro from '@/components/pages/about/Intro';
import {useLayoutEffect} from 'react';
import Projects from '../components/pages/index/Projects';
import Blog from '@/components/pages/index/Blog';


export default function About({projects}) {
  useLayoutEffect(() => {
    document.body.classList.add('bg-whisper');
    document.body.classList.add('text-black-russian');
  });
  return (
    <Layout>
          <div className='mx-auto'>
        <Intro /> 
        <Projects projects={projects} moreProjects={true} />
        <Blog />
      </div>
    </Layout>
  );
}
