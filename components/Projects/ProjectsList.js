import ProjectItem from '@/components/ui/ProjectItem';
import Tag from '@/components/ui/Tag';
import ProjectImage from '@/components/Projects/ProjectImage';

export default function ProjectsList({projects}) {
	console.log(projects[0].attributes.tags.data[1]);
  return (
    <section
      className='px-3.8 bg-whisper rounded-b-5xl pt-1.5 pb-25 z-10
    md:pb-20  relative
    lg:rounded-b-6xl lg:pb-29'
    >
      <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 1, 1024: 2}}
        className='lg:max-w-[1746px] mx-auto'
      >
        <Masonry gutter='37px'>
          {projects[0] &&
            projects.map((project, i) => (
              <ProjectItemWork key={project.id} name={project.attributes.Title}>
                {project.attributes.tags.data[0]&&(
                  <Tag
                    text1={project.attributes.tags.data[0].attributes.Name}
                    text2={
                      project.attributes.tags.data[1]
                        ? project.attributes.tags.data[1].attributes.Name
                        :''
                    }
                  />
                )}
                <ProjectItemImage
                  link={project.attributes.Poster}
                  width='398'
                  height='302'
                  variant='imageBlock'
                />
              </ProjectItemWork>
            ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}
