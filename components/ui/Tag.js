export default function Tag({text}) {
  return (
    <div className='bg-white  w-fit rounded-full px-[16px] py-[7px] inline-flex items-center'>
      <span className='dot'></span>
      <p className='text-xxs tag-text text-black'>{text}</p>

    </div>
  )
}