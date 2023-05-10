import Title from '@/components/ui/Title';
import ServiceItem from '@/components/ui/ServiceItem';
import PillowLink from '@/components/ui/PillowLink';


export default function Services({ services }) {
  return (
    <section className='px-4 pt-10 pb-[4.5rem]
    -mt-50 
    md:pb-[106px] md:border-t-1 border-eclipse md:pt-20 
    lg:px-10 lg:pb-34
    xl:px-20'>
      <div className='container'>
        <div className='flex items-center pb-15 md:pb-9 lg:mb-33'>
          <svg className='mr-5' width="30" height="30"
            viewBox="0 0 30 30">
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
          <Title text='Основные услуги' />
          <div className='hidden lg:block ml-auto'>
            <PillowLink text='Все услуги' link='#' />
          </div>
        </div>

        <div className='lg:flex'>
		{console.log(services)}
		{services.map((service, i) => (
			
          <ServiceItem
		    key={i}
            title={service.attributes.name}
            subtitle=''
            descriptionItem1={service.attributes.description}
            descriptionItem2=''
            link={service.attributes.image.data.attributes.url} />
			))}
          {/* <ServiceItem
            title='Продуктовая'
            subtitle='3D визуализация'
            descriptionItem1='Разработка визуализации'
            descriptionItem2='вашего продукта'
            link='/image/content/tap.jpg' />

          <ServiceItem
            title='Моушн &'
            subtitle='Видеопродакшн'
            descriptionItem1='Разработка уникального видео'
            descriptionItem2='ролика для вашего продукта'
            link="/image/content/iphone.jpg" /> */}
        </div>

        <form action="" method="get" className='pt-7 max-w-[562px] m-auto md:pt-10 lg:flex lg:max-w-none
        flex-wrap justify-between items-start 
        lg:px-10 lg:rounded-5xl lg:bg-nero2 lg:pb-[52px]'>
          <h3 className='text-3.5xl tracking-tight text-center mb-5 flex flex-col 
          md:flex-row justify-center md:mb-15
          lg:w-full lg:text-4xl'>Оставить заявку
            <span className='text-blue'>&nbsp;на консультацию</span></h3>
          <input className='input lg:w-[31.5%] lg:mr-7' type="text" placeholder='Имя' />
          <input className='input lg:w-[33.5%] lg:mr-7' type="tel" placeholder='Телефон*' />

          <div className='mt-7 md:flex items-center md:py-5 md:mt-0 lg:w-[30%] lg:py-0 lg:items-start'>
            <a href="#" className='w-[220px] flex items-center justify-between
          bg-white p-5 text-black-russian rounded-lr uppercase text-left py-2.5 md:mr-7
          lg:w-[266px]'>Отправить
              <span className='pillow-link-svg bg-black-russian'>
                <svg className='w-[9px] h-[15px] viewBox="0 0 9 15" rotate-180'>
                  <path d="M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416" stroke="white" strokeWidth="1.5"
                    fill="transparent" />
                </svg>
              </span></a>
            <p className='footnote w-10/12 mt-5 md:mt-0 md:w-2/4
            lg:w-auto lg:text-xs'>нажимая на кнопку &laquo;Отправить&raquo;,
              вы&nbsp;соглашаетесь на&nbsp;<span className='underline'>обработку персональных данных</span></p>
          </div>
        </form>
      </div>
    </section>
  )
}


