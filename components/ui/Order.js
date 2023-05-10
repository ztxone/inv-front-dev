import PillowLink from './PillowLink';

export default function Order() {
  return (
    <div className='hidden md:flex items-center'>
      <a href="tel:+78129092533" className='p-2.5 mr-9 tracking-tight  hover:text-suva-grey'>
        8&nbsp;812&nbsp;909&nbsp;25&nbsp;33</a>
      <PillowLink text='Отправить заявку' link='#' variant='white' />
    </div>
  )
}