import NavItem from './NavItem';
import Logo from './Logo';
import PillowLink from './PillowLink';
import NavItemAccordion from './NavItemAccordion';

export default function MobilMenu({onClose}) {
  
  return (
    <div
      className={`flex flex-col z-10 absolute top-0 left-0 right-0 bg-white pt-6 pb-10 px-3.8 lg:hidden`}
    >
      <div className='flex justify-between items-center pb-7 color-black'>
        <Logo color='black' />
        <div onClick={onClose} className='cursor-pointer'>
          <div className=''>
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_307_5508)'>
                <path
                  d='M9.57031 9.82019L30.43 30.6798'
                  stroke='black'
                  strokeWidth='1.5'
                />
                <path
                  d='M30.4297 9.82019L9.57004 30.6798'
                  stroke='black'
                  strokeWidth='1.5'
                />
              </g>
              <defs>
                <clipPath id='clip0_307_5508'>
                  <rect width='40' height='40' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <nav className='pt-5 border-b border-eclipse border-opacity-20'>
        <ul className='flex flex-col'>
            <NavItem text='О студии' link='/about' />
            <NavItemAccordion text='Услуги'/>
            <NavItem text='Портфолио' link='/works' />
            <NavItem text='Контакты' link='/contacts' />
        </ul>
      </nav>
      <div className='flex justify-between pt-25'>
        <PillowLink text='Оставить заявку' link='#' variant='white' />
        <a
          href='tel:+78129092533'
          className='p-2.5 tracking-tight text-black  hover:text-suva-grey'
        >
          8&nbsp;812&nbsp;909&nbsp;25&nbsp;33
        </a>
      </div>
    </div>
  );
}
