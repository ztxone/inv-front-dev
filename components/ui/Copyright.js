import Logo from "./Logo";

export default function Copyright() {
  return (
    <div className='border-t border-eclipse pt-[27px] text-sm px-3.8 flex items-end 
    justify-between flex-wrap md:w-9/12 lg:w-full text-inherit opacity-50'>
      <div className='w-full lg:hidden'>
        <Logo color='inherit'/>
      </div>
      <p className='mt-5 block w-full mb-[18px] md:w-auto
      md:mb-0'>2022 &copy;  invert.studio</p>
      <a href='#' className='underline decoration-1'>Политика конфиденциальности</a>
      <a href='https://web-dev-studio.ru'>
        <p className='hidden lg:block'>Design by <b>Web Devil Studio</b></p>
        <div className='lg:hidden'>
          <picture>
            <img width='80' height='35'
              src='/image/svg/wds-logo.svg'
              alt='Design by Web Devil Studio' />
          </picture>
        </div>
      </a>
    </div>
  )
}