export default function FormButton({text}) {
    return (
        <button
        type='submit'
        className='w-[220px] flex items-center justify-between
      bg-white p-5 text-black-russian rounded-lr uppercase text-left py-2.5 md:mr-7
      lg:w-[266px]'
      >
        {text}
        <span className='pillow-link-svg bg-black-russian'>
          <svg className='w-[9px] h-[15px] viewBox="0 0 9 15" rotate-180'>
            <path
              d='M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416'
              stroke='white'
              strokeWidth='1.5'
              fill='transparent'
            />
          </svg>
        </span>
      </button>
    )
}