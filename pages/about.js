import React from 'react';
import Layout from '../components/layout';
// import {fetchAPI} from "../lib/api";
// import Projects from '../components/pages/index/Projects';
import Intro from '@/components/ui/Intro';
import {useLayoutEffect} from 'react';


export default function About({}) {
  useLayoutEffect(() => {
    document.body.classList.add('bg-whisper');
    document.body.classList.add('text-black-russian');
  });
  return (
    <Layout>
          <div className='mx-auto'>
           <Intro/> 
      </div>
    </Layout>
  );
}
