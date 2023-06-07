export default function Tag({text1, text2=''}) {
  if (`${text2===''}`) {
    return (
      <div className='z-20 relative flex gap-1'>
        <div className='bg-white  w-fit rounded-full px-[16px] py-[7px] inline-flex items-center relative z-20'>
          <span className='dot'></span>
          <p className='text-xxs text-black-russian font-interTight uppercase font-medium'>{text1}</p>
        </div>
        <div className='bg-white  w-fit rounded-full px-[16px] py-[7px] inline-flex items-center relative z-20'>
          <span className='dot'></span>
          <p className='text-xxs text-black-russian font-interTight uppercase font-medium'>{text2}</p>
        </div>
      </div>
    )
  }
  return (
    <div className='bg-white  w-fit rounded-full px-[16px] py-[7px] inline-flex items-center relative z-20'>
      <span className='dot'></span>
      <p className='text-black-russian font-interTight uppercase font-medium text-xxs'>{text1}</p>
    </div>
  )
}