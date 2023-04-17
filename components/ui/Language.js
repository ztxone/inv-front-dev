export default function Language() {
  return (
    <div className='flex flex-row items-center ml-auto'>
      <button type='button'>RU</button>
      <button type='button' className='hidden'>
        EN
      </button>
      {/* <svg
        className='fill-gray ml-1.5'
        xmlns='http://www.w3.org/2000/svg'
        width='10'
        height='5'
        viewBox='0 0 10 5'
      >
        <path fill-rule='evenodd' clip-rule='evenodd' d='m0 0 5 5 5-5H0Z' />
      </svg> */}
    </div>
  );
}
