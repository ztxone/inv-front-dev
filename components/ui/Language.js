export default function Language() {
  return (
    <div className='flex flex-row items-center ml-auto pr-2.5 md:order-2 lg:order-none lg:ml-0
     lg:mr-auto hover:text-suva-grey trans-default'>
      <button type='button'>RU</button>
      <button type='button' className='hidden lg:block ml-3.8'>
        EN
      </button>
      <svg
        className='fill-gray ml-2.5 lg:hidden'
        xmlns='http://www.w3.org/2000/svg'
        width='10'
        height='5'
        viewBox='0 0 10 5'
      >
        <path fillRule='evenodd' clipRule='evenodd' d='m0 0 5 5 5-5H0Z' />
      </svg>
    </div>
  );
}
