import PillowLink from './PillowLink';
import Title from './Title';

export default function Form() {
  return (
    <div className='pb-9 pt-10.5 px-3.8 
    md:pt-16 md:pb-14
    lg:p-0 lg:mr-auto'>
      <Title text='Есть проект?' subtext='Давайте обсудим' />
      <div className='flex flex-wrap gap-5 pt-9 
      md:pt-12 md:gap-6
      lg:pt-15'>
        <PillowLink text='Заказать звонок' link='tel:#' variant='dark' variantSvg='blueSvg' />
        <PillowLink text='Заполнить бриф' link='#' variant='dark' variantSvg='whiteSvg' />
      </div>
    </div>
  )
}