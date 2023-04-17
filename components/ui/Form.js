import PillowLink from './PillowLink';

export default function Form() {
  return (
    <div className='pb-10'>
      <h2 className='title-h1 mb-7 flex flex-col 
      '>Есть проект? <span className="text-blue">Давайте обсудим!</span></h2>
      <div className='flex flex-wrap gap-5'>
        <PillowLink text='Заказать звонок' link='tel:#' />
        <PillowLink text='Заполнить бриф' link='#' />
      </div>
    </div>
  )
}