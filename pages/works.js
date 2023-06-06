import Layout from "@/components/Layout";
import {fetchAPI} from "lib/api";
import ProjectsList from '@/components/Projects/ProjectsList';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import useTranslation from 'next-translate/useTranslation';

export default function  Works( {projects} ) {
	const { t } = useTranslation("common");
  return (
    <Layout bg="grey">
      <div className="mx-auto">
	  <TitleSection text={t`works.title`} />
      <BreadCrumbs
        itemLast={t`works.title`}
      />
        <ProjectsList projects={projects}/>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [projectsRes]=await Promise.all([

    fetchAPI("/projects", {
		sort: ['ListPosition:asc'],
		fields: ['Title', 'Poster', 'slug'],
	}),

  ]);

  return {
    props: {
      projects: projectsRes.data,
    },
    revalidate: 1,
  };
}

