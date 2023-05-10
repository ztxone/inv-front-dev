const darkClasses='bg-nero text-white';
const whiteClasses='text-black bg-white hover:text-white hover:bg-nero';
const darkClassesSvg=' bg-blue';
const whiteClassesSvg='bg-black-russian group-hover:bg-blue';

export default function PillowLink({variant='dark', text, link, variantSvg='whiteSvg'}) {
  return (
    <a href={link} className={`${variant===' dark'? darkClasses:whiteClasses} pillow-link trans-default group`}>
      {text}
      <span className={`${variantSvg==='whiteSvg'? whiteClassesSvg:darkClassesSvg} pillow-link-svg`}>
        <svg className='w-[9px] h-[15px] viewBox="0 0 9 15" rotate-180'>
          <path d="M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416" stroke="white" strokeWidth="1.5"
            fill="transparent" />
        </svg>
      </span>
    </a>
  )
}
