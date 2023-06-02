import React from 'react';
import Layout from '../components/layout';
// import {fetchAPI} from "../lib/api";
// import Projects from '../components/pages/index/Projects';
import {fetchAPI} from "lib/api";
import Intro from '@/components/pages/about/Intro';
import {useLayoutEffect} from 'react';
import Projects from '../components/pages/index/Projects';
import Blog from '@/components/pages/index/Blog';


export default function About({projects, about}) {
  useLayoutEffect(() => {
    document.body.classList.add('bg-whisper');
    document.body.classList.add('text-black-russian');
  });
  return (
    <Layout>
          <div className='mx-auto'>
        <Intro info={about}/> 
        <Projects projects={projects} moreProjects={true} />
        <Blog />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
	// Run API calls in parallel
	const [aboutRes]=await Promise.all([
  
	  fetchAPI("/about", {
		  populate: "*",
	  })  
	]);
  
	return {
	  props: {
		about: aboutRes.data,
	  },
	  revalidate: 1,
	};
  }
  
