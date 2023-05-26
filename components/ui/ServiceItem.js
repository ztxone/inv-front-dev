import TitleH3 from './TitleH3';
import { getStrapiMedia } from "lib/media";
import Image from 'next/image';

export default function ServiceItem({title, subtitle,
  descriptionItem1, image}) {
  return (
    <div className={`services-card md:mb-5 lg:mr-7 relative`}>
      <TitleH3 text={title} subtext={subtitle} />
      <p className='relative z-10 text-lg pb-[2px] w-9/12'>{descriptionItem1}</p>
      {image && (<div className='absolute top-0 bottom-0 left-0 min-w-[398px] min-h-[600px] lg:min-w-fit'>
        <Image src={getStrapiMedia(image)} alt={title} width="398" height="600" className='object-cover w-full
        h-full rounded-5xl'/>
      </div>
	  )}
    </div>
  )
}