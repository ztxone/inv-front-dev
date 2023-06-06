import ProjectItem from '@/components/ui/ProjectItem';
import Tag from '@/components/ui/Tag';
import ProjectItemImage from '@/components/ui/ProjectItemImage';

export default function ProjectsList({projects}) {
	console.log(projects[0].attributes);
  return (
    <section className='bg-whisper rounded-5xl pb-6 pt-16 md:pt-[60px] text-blackRussian md:pb-12 lg:pt-36 lg:pb-9 lg:rounded-7xl'>
      <div className='container'>
        <div className='px-3.8 lg:px-24.5 lg:pb-20'>
          
		  {projects[0] > 0 && (
			<ul className='pt-15 border-t border-black-russian md:pt-10 lg:grid grid-cols-2 gap-x-7 lg:pt-12'>
				{projects.map((project, i) => (
				  <ProjectItem key={project.id} name={project.attributes.Title}>
					<div className='rounded-l15 relative py-5 px-9'>
						<Tag text1='3D анимация' text2='МОДЕЛИРОВАНИЕ' />
						<ProjectItemImage
							link='/image/content/murino-14.png'
							width='398'
							height='302'
							variant='imageBlock'
						/>
					</div>
				  </ProjectItem>
				))}
			</ul>
		  )}

        </div>
      </div>     
    </section>
  );
}
