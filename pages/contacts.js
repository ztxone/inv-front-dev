import React, {useEffect} from 'react';
import Layout from '@/components/layout';
import useTranslation from 'next-translate/useTranslation';
import IntroSlides from '@/components/ui/IntroSlides';
import Socials from '@/components/ui/Socials';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import {fetchAPI} from 'lib/api';
import Address from '@/components/ui/Address';
import ServicesSlides from '@/components/Services/ServicesSlides';
import Map from '@/components/ui/Map';
import Blog from '@/components/pages/index/Blog';

export default function Contacts({contact}) {
  const i18n=useTranslation();
  const locale=i18n.lang;

  return (
    <Layout bg='white' headerBg='white' footerBg='white'>
      <div className='lg:max-w-[1746px] mx-auto'>
        <div className='px-3.8'>
          <TitleSection text={contact.attributes.Title} />
          <BreadCrumbs itemLast={contact.attributes.Title} />
        </div>
        <Address
          address={contact.attributes.Address}
          phone={contact.attributes.Phone}
          email={contact.attributes.Email}
        />
        <div className='px-3.8'>
          <Socials variant='white' links={contact.attributes.ContactSocials} />
        </div>
        {/* TODO */}
        <div className='lg:flex flex-wrap justify-between px-3.8'>
          {/* <IntroSlides /> */}
          <ServicesSlides />
        </div>
        <Map />
        <Blog />
      </div>
    </Layout>
  );
}

export async function getStaticProps({locale}) {
  const [contactRes]=await Promise.all([
    fetchAPI('/contact', {
      fields: ['Title', 'Address', 'Phone', 'Email'],
      locale: locale,
      populate: '*',
    }),
  ]);

  return {
    props: {
      contact: contactRes.data,
    },
    revalidate: 1,
  };
}
