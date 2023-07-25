import TagItemBrief from './TagItemBrief';

export default function TagsBrief({title}) {
  return (
    <div className='pt-10 pb-1.5
    md:pt-15'>
      <h2 className='mb-7 text-xl
      md:text-1xl
      lg:text-3.8xl'
      >{title}</h2>
      <div className='flex flex-wrap'>
        <TagItemBrief color='blue' text='Архитектурная визуализация' onClick />
        <TagItemBrief color='white' text='Производство видео' onClick />
      </div>
    </div>
  );
}
