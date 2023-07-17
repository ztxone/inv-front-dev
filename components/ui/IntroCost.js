import PillowLink from './PillowLink';

export default function IntroCost() {
  return (
    <div className='container pt-15
    md:pt-20'>
      <div className="w-full bg-[url('/image/content/bg-intro-mob.png')] bg-no-repeat bg-cover pt-15 pb-10 px-10 rounded-5xl flex flex-col justify-between md:bg-[url('/image/content/bg-intro.png')] md:bg-right-top-30 min-h-[463px] text-white mx-auto
    md:pb-33
lg:px-21 lg:pt-25 lg:pb-20">
        <h3 className='text-4xl tracking-tight md:w-9/12 mb-10
      lg:text-6xl
      lg:mb-7'>
          Сколько стоит ваш проект?
        </h3>
        <p className='pr-6 w-full mb-auto
      md:text-xl md:max-w-[378px] md:pr-0 md:w-2/4
      lg:text-1xl '>
          Заполните форму, и мы подготовим для вас индивидуальное предложение
        </p>
        <PillowLink text='Заполнить бриф' link='#' variantSvg='dark' variant='white'></PillowLink>
      </div>
    </div>
  )
}