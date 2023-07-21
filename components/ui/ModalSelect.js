export default function ModalSelect({option1, option2, option3, option4}) {
  return (
    <div className='relative w-full text-fiord group'>
      <input name='theme' id='theme' type='hidden'></input>
      <div className='py-3 px-5 w-full border border-link-water rounded-5xl text-left cursor-pointer flex items-center justify-between'>
        <span className='opacity-50'>{option1}</span>
        <svg
          className='group-hover:rotate-180'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M7 10L12 15L17 10H7Z'
            fill='#737373'
          />
        </svg>
      </div>
      <ul className='select__list hidden group-hover:block absolute top-100 left-0 right-0 bg-white z-50 shadow-2xl'>
        <li className='relative border-b border-b-link-water p-3.8 cursor-pointer text-left'>
          {option1}
        </li>
        <li className='relative border-b border-b-link-water p-3.8 cursor-pointer text-left'>
          {option2}
        </li>
        <li className='relative border-b border-b-link-water p-3.8 cursor-pointer text-left'>
          {option3}
        </li>
        <li className='relative border-b border-b-link-water p-3.8 cursor-pointer text-left'>
          {option4}
        </li>
      </ul>
    </div>
  );
}
