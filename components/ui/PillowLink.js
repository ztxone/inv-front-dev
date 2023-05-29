const darkClasses = 'bg-nero text-white hover:text-black hover:bg-white';
const whiteClasses = 'text-black bg-white hover:text-white hover:bg-nero border-black';
const darkClassesSvg = ' bg-blue';
const whiteClassesSvg = 'bg-white text-black group-hover:bg-royal-blue group-hover:text-white';

export default function PillowLink({
  variant,
  text,
  link,
  variantSvg,
}) {
  return (
    <a
      href={link}
      className={`${
        variant =='dark' ? darkClasses : whiteClasses
      } text-base tracking-tight pl-[24px] py-[4px] pr-[2px] w-max flex justify-center items-center rounded-6xl trans-default group border`}
    >
      {text}
      <span
        className={`${
          variantSvg === 'whiteSvg' ? whiteClassesSvg : darkClassesSvg
        } w-[37px] h-[37px] flex items-center justify-center rounded-full shrink-0 ml-12`}
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
    </a>
  );
}
