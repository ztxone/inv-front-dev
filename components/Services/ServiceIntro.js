import Image from 'next/image';

export default function ServiceIntro({title, text}) {
  return (
    <div
      className='pt-6 pb-15
    lg:flex lg:w-full lg:px-21'
    >
      <div className='lg:w-2/4  lg:order-2 lg:pl-25'>
        <Image
          className='h-full aspect-[428/320] object-cover w-full
        lg:rounded-l15 lg:aspect-[858/320]'
          src='/image/content/service-intro.png'
          width='451'
          height='320'
          alt=''
        ></Image>
      </div>
      <div
        className='container
      lg:w-2/4'
      >
        <h2 className='text-base uppercase font-bold pt-6xl'>{title}</h2>
        <p
          className='leading-snug
        md:text-1xl'
        >
          {text}
        </p>
      </div>
    </div>
  );
}
