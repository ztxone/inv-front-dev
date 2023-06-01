import React from 'react';
import Layout from '../components/layout';
// import {fetchAPI} from "../lib/api";
// import Projects from '../components/pages/index/Projects';
import {useLayoutEffect} from 'react';

export default function About({}) {
  useLayoutEffect(() => {
    document.body.classList.add('bg-black');
    document.body.classList.add('text-white');
  });
  return (
    <Layout>
      <div className='mx-auto py-6'></div>
    </Layout>
  );
}
