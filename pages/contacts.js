import React from 'react';
import Layout from '../components/layout';
import {fetchAPI} from "lib/api";
import useTranslation from 'next-translate/useTranslation';


export default function Contacts ({}) {

  const i18n = useTranslation();
  const locale = i18n.lang;
  // useDarkFooter();

  return (
    <Layout bg="grey">

    </Layout>
  );
}

// export async function getStaticProps({ locale  }) {
	
// 	const [aboutRes]=await Promise.all([
// 	  fetchAPI("/contacts", {
// 		  populate: "*",
// 		  locale: locale
// 	  })  
// 	]);
  
// 	return {
// 	  props: {
// 		about: aboutRes.data,
// 	  },
// 	  revalidate: 1,
// 	};
//   }
  