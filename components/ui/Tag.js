export default function Tag({variant='white', text1, text2=''}) {
  return text2? (
    <div className='z-2 relative flex gap-1'>
      <div
        className={`bg-${variant}  w-fit rounded-full px-[16px] py-[7px] inline-flex items-center relative z-3`}
      >
        <span className={`dot-${variant}`}></span>
        <p
          className={`text-xxs tag-text text-${variant==='white'? 'black':'white'
            }`}
        >
          {text1}
        </p>
      </div>
      <div
        className={`bg-${variant}  w-fit rounded-full px-[16px] py-[7px] inline-flex items-center relative z-3`}
      >
        <span className={`dot-${variant}`}></span>
        <p
          className={`text-xxs tag-text text-${variant==='white'? 'black':'white'
            }`}
        >
          {text2}
        </p>
      </div>
    </div>
  ):(
    <div
      className={`bg-${variant}  w-fit rounded-full px-[16px] py-[7px] inline-flex items-center relative z-3`}
    >
      <span className={`dot-${variant}`}></span>
      <p
        className={`text-xxs tag-text text-${variant==='white'? 'black':'white'
          }`}
      >
        {text1}
      </p>
    </div>
  );
}

{
  /* <div className="bg-black  w-fit rounded-full px-[16px] py-[7px] inline-flex items-center relative z-20">
  <span className="bg-white rounded-full w-[4px] h-[4px] mr-[5px]"></span>
  <p className="text-xxs font-interTight uppercase font-medium  text-white">
    pdf
  </p>
</div>; */
}
