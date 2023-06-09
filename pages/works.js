import Layout from "@/components/Layout";
import {fetchAPI} from "lib/api";
import ProjectsList from '@/components/Projects/ProjectsList';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import useTranslation from 'next-translate/useTranslation';
import ProjectWorks from '@/components/pages/works/ProjectsWork';

export default function  Works( {projects} ) {
	const { t } = useTranslation("common");
  return (
    <Layout bg="grey">
      <section className='px-3.8 py bg-whisper rounded-b-5xl pb-12 text-black'>
        <div className='container mx-auto'>
	  <TitleSection text={t`works.title`} />
      <BreadCrumbs
        itemLast={t`works.title`}
      />
        <ProjectWorks />
        <ProjectsList projects={projects}/>
      </div>
</section>

    </Layout>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel

  const [projectsRes]=await Promise.all([

    fetchAPI("/projects", {
		sort: ['ListPosition:asc'],
		populate: ['Poster', 'tags'],
		fields: ['Title', 'slug'],
	}),

  ]);

  return {
    props: {
      projects: projectsRes.data,
    },
    revalidate: 1,
  };
}
