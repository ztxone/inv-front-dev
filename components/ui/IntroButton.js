const white='text-white';
const dark='text-black';

export default function IntroButton({text, variant='white', children}) {
  return (
    <button className='flex items-center mt-6'>
      <span className={`${variant==='white'? white:dark} mr-[13px] text-sm
      md:mr-9`}>{text}</span>
      {children}
    </button>
  );
}
