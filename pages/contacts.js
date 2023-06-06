import React from 'react';
import Layout from '../components/layout';
import {fetchAPI} from 'lib/api';
import useTranslation from 'next-translate/useTranslation';
import IntroContacts from '@/components/pages/contacts/IntroContacts';
import Address from '@/components/ui/Address';
import IntroSlides from '@/components/ui/IntroSlides';
import Socials from '@/components/ui/Socials';


export default function Contacts({}) {
  const i18n = useTranslation();
  const locale = i18n.lang;

  return (
    <Layout bg='grey'>
      <div>
        {/* <IntroContacts info='{contacts}' /> */}
        <IntroContacts info='#' />
        <Address />
        <Socials variant='white'></Socials>
        {/* TODO */}
        <div className='lg:flex flex-wrap justify-between p-3.8'>
        <IntroSlides />
      </div>
     
      </div>
    </Layout>
  );
}

