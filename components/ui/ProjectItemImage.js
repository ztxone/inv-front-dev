import Image from 'next/image';

export default function ProjectItemImage({link, width, height}) {
  return (
    <div className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-1/2
    md:top-[45%]'>
      <Image width={width} height={height} src={link}
        alt="Project name" className='md:w-full md:h-auto' />
    </div>
  )
}
