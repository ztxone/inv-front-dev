export default function ProjectButton() {
  return (
    <button
      className='button-all uppercase text-xl font-interTight  py-2 flex items-center justify-center border-1 w-full rounded-lr -mt-3.8 bg-whisper relative z-10 font-medium border-nero border-opacity-30
        md:max-w-[351px]
        lg:pt-10 lg:pb-11 lg:rounded-5xl'
    >
      Вcе проекты
      <span
        className='bg-royal-blue rounded-full w-[37px] h-[37px] flex 
justify-center items-center text-white ml-5'
      >
        &#8250;
      </span>
    </button>
  );
}
