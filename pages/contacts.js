import React from 'react';
import Layout from '../components/layout';
import {fetchAPI} from 'lib/api';
import useTranslation from 'next-translate/useTranslation';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import IntroContacts from '@/components/pages/contacts/IntroContacts';
import Address from '@/components/ui/Address';

export default function Contacts({}) {
  const i18n = useTranslation();
  const locale = i18n.lang;

  return (
    <Layout bg='grey'>
      <div>
        {/* <IntroContacts info='{contacts}' /> */}
        <IntroContacts info='#' />
        <Address/>
      </div>
    </Layout>
  );
}

// export async function getStaticProps({locale}) {
//   const [aboutRes] = await Promise.all([
//     fetchAPI('/contacts', {
//       populate: '*',
//       locale: locale,
//     }),
//   ]);

//   return {
//     props: {
//       about: contactsRes.data,
//     },
//     revalidate: 1,
//   };
// }
