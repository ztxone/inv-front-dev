export default function Nav() {
  return (
    <nav className='hidden lg:block lg:mr-auto'>
      <ul className='flex items-center justify-between'>
        <li>
          <a href='about.html' className='p-5'>О&nbsp;студии</a>
        </li>
        <li>
          <a href='services' className='p-5 flex items-center'>Услуги
            <svg
              className='fill-gray ml-2.5'
              xmlns='http://www.w3.org/2000/svg'
              width='10'
              height='5'
              viewBox='0 0 10 5'
            >
              <path fill-rule='evenodd' clip-rule='evenodd' d='m0 0 5 5 5-5H0Z' />
            </svg>
          </a>
          <ul className='hidden'>
            <li >Архитектурная 3D визуализация</li>
            <li>Продуктовая 3D визуализация</li>
            <li>Моушн & Видеопродакшн</li>
            <li>3D моделирование</li>
          </ul>
        </li>
        <li>
          <a href='works' className='p-5'>Портфолио</a>
        </li>
        <li>
          <a href='contacts' className='p-5'>Контакты</a>
        </li>
      </ul>
    </nav>
  );
}
