import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export default function ProjectButton({text='Все проекты'}) {
  const {t}=useTranslation('common');
  return (
    <div
      className='text-center pt-2 pb-9 md:flex md:flex-col md:items-center
    max-w-[351px] mx-auto'
    >
      <p
        className='font-interTight font-semibold text-6xl text-black opacity-5
				lg:text-6.5xl'
      >
        More
      </p>
      <Link
        href={`/portfolio`}
        className='button-all uppercase text-xl font-interTight  py-2 flex items-center justify-center border-1 w-full rounded-lr -mt-6 bg-whisper relative z-10 font-medium border-nero border-opacity-30
        md:max-w-[351px]
        lg:pt-4.5 lg:pb-4.5 lg:rounded-5xl'
      >
        {/* {t("All_projects")} */}
        {text}
        <span
          className='bg-royal-blue rounded-full w-[37px] h-[37px] flex 
justify-center items-center text-white ml-5'
        >
          <svg className='w-[9px] h-[15px] viewBox="0 0 9 15" rotate-180'>
            <path
              d='M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416'
              stroke='currentColor'
              strokeWidth='1.5'
              fill='transparent'
            />
          </svg>
        </span>
      </Link>
    </div>
  );
}
