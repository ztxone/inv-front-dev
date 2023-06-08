import React, { useState } from 'react';
import Layout from '../components/Layout';
// import {fetchAPI} from "../lib/api";
// import Projects from '../components/pages/index/Projects';
import {fetchAPI} from "lib/api";
import Intro from '@/components/pages/about/Intro';
import Projects from '../components/Projects/ProjectsMainList';
import Blog from '@/components/pages/index/Blog';
import useTranslation from 'next-translate/useTranslation';
import useDarkFooter from 'hooks/useDarkFooter';

export default function About({projects, about}) {

  const i18n = useTranslation();
  const locale = i18n.lang;
  // useDarkFooter();

  return (
    <Layout bg="grey">
          <div className='mx-auto'>
        <Intro info={about}/> 
        <Projects projects={projects} moreProjects={true} />
        <Blog />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale  }) {
	
	const [aboutRes]=await Promise.all([
	  fetchAPI("/about", {
		  populate: "*",
		  locale: locale
	  })  
	]);
  
	return {
	  props: {
		about: aboutRes.data,
	  },
	  revalidate: 1,
	};
  }
  
