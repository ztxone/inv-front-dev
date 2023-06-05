import React from 'react';
import Layout from '../components/layout';
// import {fetchAPI} from "../lib/api";
// import Projects from '../components/pages/index/Projects';
import Intro from '@/components/pages/about/Intro';
import {useLayoutEffect} from 'react';
import Projects from '../components/pages/index/Projects';
import Blog from '@/components/pages/index/Blog';


function useCreatePage(class1, class2, class3) {
  useLayoutEffect(() => {
    document.body.classList.add(class1);
    document.body.classList.add(class2);
    document.body.classList.add(class3);
  }, []);  
}

export default function About({projects}) {
  useCreatePage('bg-whisper', 'text-black-russian', 'dark')

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
