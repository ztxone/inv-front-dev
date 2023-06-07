import Layout from "@/components/Layout";
import {fetchAPI} from "lib/api";
import ProjectsList from '@/components/Projects/ProjectsListOld';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import useTranslation from 'next-translate/useTranslation';
import ProjectsWorks from '@/components/Projects/ProjectsWork';
import TagItemSection from '@/components/ui/TagItemSection';

export default function  Works( {projects} ) {
	const { t } = useTranslation("common");
  return (
    <Layout bg="grey">
      <section className='px-3.8 py bg-whisper rounded-b-5xl pb-12 text-black'>
        <div className='container mx-auto'>
			<div className='pb-15
			md:pb-[28px]'>
				<TitleSection text={t`works.title`} />
				<BreadCrumbs
					itemLast={t`works.title`}
				/>
	  	        <div className='flex flex-wrap md:w-4/5'>
					<TagItemSection text='Архитектурная 3D визуализация' color='blue' />
					<TagItemSection text='Продуктовая 3D визуализация' color='white' />
					<TagItemSection text='Моушн & Видеопродакшн' color='white' />
					<TagItemSection text='3D моделирование' color='white' />
				</div>
			</div>
        <ProjectsWorks projects={projects}/>
        {/* <ProjectsList projects={projects}/> */}
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
