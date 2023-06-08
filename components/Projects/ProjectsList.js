import ProjectItemWork from '@/components/ui/ProjectItemWork';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import ProjectItemImage from '@/components/ui/ProjectItemImage';
import Tag from '@/components/ui/Tag';

export default function ProjectsList( {projects} ) {
  //console.log(projects);
  return (
    <div className='container lg:max-w-[1746px]'>
     <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 1, 1024: 2}} className='pt-1.5 pb-15'>
      <Masonry gutter='37px'>
	    {projects[0] && 
		  projects.map((project, i) => (
			<ProjectItemWork key={project.id} name={project.attributes.Title}>
				{project.attributes.tags.data[0] && <Tag text1={project.attributes.tags.data[0].attributes.Name}  text2={project.attributes.tags.data[1] ? project.attributes.tags.data[1].attributes.Name : ''}/>} 
				<ProjectItemImage
					link={project.attributes.Poster}
					width='398'
					height='302'
					variant='imageBlock'
				/>
			</ProjectItemWork>
			))
		}

      </Masonry>
    </ResponsiveMasonry>
    </div>
  );
}
