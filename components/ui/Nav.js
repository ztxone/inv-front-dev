export default function Nav() {
  return (
    <nav className='hidden'>
      <ul>
        <li>
          <a href='about.html'>О студии</a>
        </li>
        <li className='ml-6'>
          <a href='services'>Услуги</a>
          <ul>
            <li>Архитектурная 3D визуализация</li>
            <li>Продуктовая 3D визуализация</li>
            <li>Моушн & Видеопродакшн</li>
            <li>3D моделирование</li>
          </ul>
        </li>
        <li>
          <a href='works'>Портфолио</a>
        </li>
        <li>
          <a href='contacts'>Контакты</a>
        </li>
      </ul>
    </nav>
  );
}
