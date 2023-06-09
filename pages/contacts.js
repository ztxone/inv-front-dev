import React from "react";
import Layout from "../components/Layout";
import useTranslation from "next-translate/useTranslation";
import IntroSlides from "@/components/ui/IntroSlides";
import Socials from "@/components/ui/Socials";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import AddressTitle from "@/components/ui/AddressTitle";
import AddressText from "@/components/ui/AddressText";
import { fetchAPI } from "lib/api";
import Address from "@/components/ui/Address";

export default function Contacts({ contact }) {
  const i18n = useTranslation();
  const locale = i18n.lang;
  console.log(contact);

  return (
    <Layout bg="grey">
      <div className="container lg:max-w-[1746px] px-3.8 ">
        <TitleSection text={contact.attributes.Title} />
        <BreadCrumbs itemLast={contact.attributes.Title} />
      </div>
      <Address
        address={contact.attributes.Address}
        phone={contact.attributes.Phone}
        email={contact.attributes.Email}
      />
      <Socials
        variant="white"
        links={contact.attributes.ContactSocials}
      ></Socials>
      {/* TODO */}
      <div className="lg:flex flex-wrap justify-between p-3.8">
        <IntroSlides />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  // Run API calls in parallel

  const [contactRes] = await Promise.all([
    fetchAPI("/contact", {
      sort: ["ListPosition:asc"],
      populate: "*",
      locale: locale,
    }),
  ]);

  return {
    props: {
      contact: contactRes.data,
    },
    revalidate: 1,
  };
}
