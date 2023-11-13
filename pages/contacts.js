import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import { fetchAPI } from "lib/api";
import ServicesSlides from "@/components/Services/ServicesSlides";
import Map from "@/components/ui/Map";
import IntroCost from "@/components/ui/IntroCost";
import BlogsBlockList from "@/components/Blogs/BlogsBlockList";
import Address from "@/components/ui/Address";
import Line from "@/components/ui/Line";
import Seo from "@/components/seo";

function Contacts({ contact, blogs }) {
  const i18n = useTranslation();
  const locale = i18n.lang;
  const seo = {
    metaTitle: contact.attributes.Seo.metaTitle,
    metaDescription: contact.attributes.Seo.metaDescription,
    shareImage: "",
  };

  return (
    <>
      <Seo seo={seo} />
      <TitleSection text={contact.attributes.Title} />
      <div className="container">
        <Line variantColor="grey" />
      </div>
      <BreadCrumbs
        links={[
          {
            title: contact.attributes.Title,
            path: "",
            active: false,
          },
        ]}
      />
      <div className="container">
        <Address
          address={contact.attributes.Address}
          phone={contact.attributes.Phone}
          email={contact.attributes.Email}
          socials={contact.attributes.ContactSocials}
        />
        <ServicesSlides />
      </div>

      <Map />
      <IntroCost />
      <BlogsBlockList
        articleColor="inherit"
        titleColor="black"
        buttonColor="black"
        blogRes={blogs}
      />
      <div className="container">
        <Line variantColor="grey" />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const [contactRes, blogsRes] = await Promise.all([
    fetchAPI("/contact", {
      fields: ["Title", "Address", "Phone", "Email"],
      locale: locale,
      populate: "*",
    }),
    fetchAPI("/blogs", {
      fields: ["Title", "slug", "Preview"],
      populate: ["tags", "Image_preview"],
      locale: locale,
    }),
  ]);

  return {
    props: {
      contact: contactRes.data,
      blogs: blogsRes.data,
    },
    revalidate: 1,
  };
}

Contacts.getLayout = function getLayout(page) {
  return (
    <Layout
      bg="white"
      headerBg="white"
      footerBg="white"
      pillowColor="white"
      variantSvg="darkClassesSvg"
    >
      {page}
    </Layout>
  );
};

export default Contacts;
