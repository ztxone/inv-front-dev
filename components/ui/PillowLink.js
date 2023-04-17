export default function PillowLink({text, link}) {
  return (
    <a href={link} className='text-base tracking-tight pl-[24px] py-[4px] pr-[4px] w-max
       bg-nero flex justify-center items-center rounded-6xl'>
      {text}
      <span className='w-[37px] h-[37px] flex items-center justify-center bg-blue rounded-full shrink-0 ml-[48px]'>
        <svg className='w-[9px] h-[15px] viewBox="0 0 9 15" rotate-180'>
          <path d="M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416" stroke="white" stroke-width="1.5"
            fill="transparent" />
        </svg>
      </span>
    </a>
  )
}