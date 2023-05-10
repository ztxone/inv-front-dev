import PillowLink from './PillowLink';
import Title from './Title';

export default function Form() {
  return (
    <div className='pb-10 pt-[48px] px-3.8 lg:mr-auto md:py-16 xl:pt-0'>
      <Title text='Есть проект?' subtext='Давайте обсудим' />
      <div className='flex flex-wrap gap-5 pt-9 
      md:pt-12 md:gap-6'>
        <PillowLink text='Заказать звонок' link='tel:#' variant='dark' variantSvg='blueSvg' />
        <PillowLink text='Заполнить бриф' link='#' variant='dark' />
      </div>
    </div>
  )
}