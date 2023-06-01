import NavSubItem from './NavSubItem';

export default function Nav() {
  return (
    <nav className='hidden lg:block lg:mr-auto text-inherit'>
      <ul className='flex items-center justify-between'>
        <li>
          <a href='/about' className='p-5'>
            О&nbsp;студии
          </a>
        </li>
        <li className='group relative'>
          <p className='p-5 flex items-center cursor-pointer'>
            Услуги
            <svg
              className='w-[10px] ml-[8px] group-hover:rotate-180'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 10 7'
            >
              <path d='m1 1.3 4 4 4-4' stroke='#fff' />
            </svg>
          </p>
          <ul className='hidden group-hover:block absolute left-8 min-w-[300px] min-h-[150px] bg-white rounded-[2px] p-6'>
            <NavSubItem link='#' text='Архитектурная 3D визуализация'/>
            <NavSubItem link='#' text='Продуктовая 3D визуализация'/>
            <NavSubItem link='#' text='Моушн & Видеопродакшн'/>
            <NavSubItem link='#' text='3D моделирование'/>
          </ul>
        </li>
        <li>
          <a href='/works' className='p-5'>
            Портфолио
          </a>
        </li>
        <li>
          <a href='/contacts' className='p-5'>
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}
