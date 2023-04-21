export default function Services() {
  return (
    <section className='px-4 pt-2 pb-20'>
      <div className='flex items-center mb-15'>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.125 30L13.125 -1.63918e-07L16.875
           0L16.875 30L13.125 30Z" fill="#4574EF" />
          <path
            d="M3.27835e-07 13.125L30 13.125L30 16.875L0 16.875L3.27835e-07 13.125Z" fill="#4574EF" />
          <path
            d="M3.06874 24.2808L24.2819 3.06759L26.9336 5.71924L5.72039 26.9324L3.06874 24.2808Z" fill="#4574EF" />
          <path
            d="M24.2803 26.9325L3.0671 5.71928L5.71875 3.06763L26.932 24.2808L24.2803 26.9325Z" fill="#4574EF" />
          <path
            d="M24.2803 26.9325L3.0671 5.71928L5.71875 3.06763L26.932 24.2808L24.2803 26.9325Z" fill="#4574EF" />
        </svg>
        <h2 className='title-h1 ml-5'>Основные услуги</h2>
        <button className='hidden' type="button">Все услуги</button>
      </div>

      <div>
        <div className='bg-[url("../public/image/content/izm.jpg")] services-card'>
          <h3 className='title-h3'>Архитектурная <span>3D визуализация</span></h3>
          <p className='description mb-1'>Для экстерьеров</p>
          <p className='description'>Для интерьеров</p>
        </div>

        <div className='bg-[url("../public/image/content/tap.jpg")] services-card'>
          <h3 className='title-h3'>Продуктовая <span>3D визуализация</span></h3>
          <p className='description'>Разработка визуализации <span>вашего продукта</span></p>
        </div>

        <div className='bg-[url("../public/image/content/iphone.jpg")] services-card'>
          <h3 className='title-h3'>Моушн & <span>Видеопродакшн</span></h3>
          <p className='description'>Разработка уникального видео <span>ролика для вашего продукта</span></p>
        </div>
      </div>
      <form action="" method="get">
        <h3 className='title-h4 text-center mb-5'>Оставить заявку
          <span className='text-blue'>на консультацию</span></h3>
        <input className='input' type="text" placeholder='Имя' />
        <input className='input' type="tel" placeholder='Телефон*' />
        <button className='w-[220px] bg-white p-5 text-blackRussian rounded-lr uppercase text-left'>Отправить</button>
        <p className='footnote w-10/12'>нажимая на кнопку &laquo;Отправить&raquo;,
          вы&nbsp;соглашаетесь на&nbsp;обработку персональных данных</p>
      </form>
    </section>
  )
}


