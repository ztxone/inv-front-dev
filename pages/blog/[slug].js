import Layout from "@/components/layout";

import { fetchAPI } from "lib/api";

export default function Blog({ blog }) {
  //   const seo = {
  //     metaTitle: category.attributes.name,
  //     metaDescription: `All ${category.attributes.name} articles`,
  //   };
  //console.log(blog);

  return (
    <Layout bg="white" headerBg="white" footerBg="black">
      {/* <Seo seo={seo} /> */}
      <h1>{blog.attributes.Title}</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  const blogsRes = await fetchAPI("/blogs", { fields: ["slug"] });

  return {
    paths: blogsRes.data.map((blog) => ({
      params: {
        slug: blog.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const matchingBlogs = await fetchAPI("/blogs", {
    fields: ["Title"],
    filters: { slug: params.slug },
  });

  return {
    props: {
      blog: matchingBlogs.data[0],
    },
    revalidate: 1,
  };
}
