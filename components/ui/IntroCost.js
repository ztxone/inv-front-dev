import PillowLink from './PillowLink';

export default function IntroCost() {
  return (
    <div className="w-full bg-[url('/image/content/bg-intro-mob.png')] bg-no-repeat bg-cover py-15 px-10 rounded-5xl flex flex-col justify-between md:bg-[url('/image/content/bg-intro.png')] md:bg-right-top-30 min-h-[463px] text-white">
      <h3 className=' text-4xl w-9/12 mb-10
      lg:text-6xl'>
      Сколько стоит ваш проект?
      </h3>
      <p className='w-4/5 mb-auto
      md:text-xl lg:text-1xl md:w-2/4 md:max-w-[378px]'>
      Заполните форму, и мы подготовим для вас индивидуальное предложение
      </p>
      <PillowLink text='Заполнить бриф' link='#' variantSvg='dark' variant='white'></PillowLink>      
      </div>
    )
}