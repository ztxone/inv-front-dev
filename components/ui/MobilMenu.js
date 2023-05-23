import NavItem from './NavItem';
import Logo from './Logo';
import PillowLink from './PillowLink';
import { useState } from "react";

export default function MobilMenu({onClose}) {
  const [isNavOpen, setIsNavOpen]=useState(false); 
  
  return (
    <div className={`flex flex-col z-10 absolute top-0 left-0 right-0 bg-white px-3.8 pt-6 pb-10 lg:hidden`} onClick={onClose}>
      <Logo color='black'/>
      <div onClick={() => setIsNavOpen(false)} >
        <div className='absolute top-0 right-0 px-8 py-8'>
          <svg
            className='h-8 w-8 text-black'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <line x1='18' y1='6' x2='6' y2='18' />
            <line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        </div>
      </div>
      
      <nav >
        <ul className='flex flex-col'>
          <li>
            <NavItem text='О студии' link='/about' />
          </li>
          <li>
            <NavItem text='Услуги' link='services' />
            <ul className='hidden'>
              <li>Архитектурная 3D визуализация</li>
              <li>Продуктовая 3D визуализация</li>
              <li>Моушн & Видеопродакшн</li>
              <li>3D моделирование</li>
            </ul>
          </li>
          <li>
            <NavItem text='Портфолио' link='/works' />
          </li>
          <li>
            <NavItem text='Контакты' link='/contacts' />
          </li>
        </ul>
      </nav>
      <div className='hidden md:flex items-center'>
        <a
          href='tel:+78129092533'
          className='p-2.5 mr-9 tracking-tight  hover:text-suva-grey'
        >
          8&nbsp;812&nbsp;909&nbsp;25&nbsp;33
        </a>
        <PillowLink text='Отправить заявку' link='#' variant='white' />
      </div>
    </div>
  );
}
