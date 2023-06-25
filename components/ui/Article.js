const colorInherit='bg-inherit border-1 border-nobel text-nero2';
const colorNero='bg-nero';

export default function Article({
  link,
  tag,
  title,
  text,
  variant='colorNero',
}) {
  return (
    <article
      className={`${variant=='nero'? colorNero:colorInherit
        } rounded-l15 flex flex-col  h-[422px] pb-6 w-[288px]
        md:w-[562px]`}
    >
      <div className='rounded-l15 mb-7 w-full relative'>
        <picture>
          <img
            className='rounded-l15 w-full'
            width='288'
            height='147'
            src={link}
            alt='#'
          />
        </picture>
      </div>

      <div className='px-5 overflow-hidden'>
        <div className='bg-white rounded-full px-[15px] py-[8px] inline-flex items-center w-auto self-start mb-5'>
          <span className='dot'></span>
          <p className='text-black-russian font-interTight uppercase font-medium text-xxs'>
            {tag}
          </p>
        </div>
        <h3
          className='text-xl tracking-tight mb-3.8 w-9/12
        md:text-2xl'
        >
          {title}
        </h3>
        <p
          className='text-baseHeight tracking-tight opacity-70
        md:pr-3.8'
        >
          {text}
        </p>
      </div>
    </article>
  );
}
