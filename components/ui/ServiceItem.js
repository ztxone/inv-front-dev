import TitleH3 from './TitleH3';
import Image from 'next/image';

export default function ServiceItem({title, subtitle,
  descriptionItem1, descriptionItem2, link}) {
  return (
    <div className={`services-card md:mb-5 lg:mr-7 relative`}>
      <TitleH3 text={title} subtext={subtitle} />
      <p className='relative z-10 text-lg pb-[2px]'>{descriptionItem1}</p>
      <p className='relative z-10 text-lg'>{descriptionItem2}</p>
      <div className='absolute top-0 bottom-0 left-0 min-w-[398px] min-h-[600px] lg:min-w-fit'>
        <Image src={link} alt={title} width="100" height="100" className='object-cover w-full
        h-full rounded-5xl'/>
      </div>
    </div>
  )
}