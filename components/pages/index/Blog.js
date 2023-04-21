import PillowLink from '../../ui/PillowLink';

export default function Blog() {
  return (
    <section className='pt-[68px] pb-10'>

      <div className='flex justify-between px-3.8 pb-10 items-center'>
        <h2 className="title-h1">Блог <span className='text-blue'>invert</span></h2>
        <div className='flex'>
          <button className='button-pagination mr-[13px]' type='button' aria-label="Previous slide">
            <svg className='w-[9px] h-[15px] viewBox="0 0 9 15'>
              <path d="M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416" stroke="white" stroke-width="1.5" />
            </svg>
          </button>
          <button className='button-pagination' type='button' aria-label="Next slide">
            <svg className='w-[9px] h-[15px] viewBox="0 0 9 15" rotate-180'>
              <path d="M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416" stroke="white" stroke-width="1.5" />
            </svg>
          </button>
        </div>
      </div>

      <ul className='flex pl-3.8 overflow-hidden mb-7'>

        <li className='w-[288px] shrink-0 mr-2.5'>
          <article className='rounded-l15 flex flex-col bg-nero pb-10 h-[442px]'>
            <div className='rounded-l15 mb-[23px]'>
              <picture>
                <img className='rounded-l15' width='288' height='147'
                  src='/image/content/image-10.png' alt="#" />
              </picture>
            </div>
            <div className='bg-white rounded-full px-[15px] py-[8px] inline-flex items-center w-auto m-4 self-start'>
              <span className='dot'></span>
              <p className='text-xxs tag-text'>VR</p>
            </div>
            <div className='px-5'>
              <h3 className='text-xl tracking-tight mb-5 w-9/12'>VR-футболка Owo: мнения тестеров</h3>
              <p className='text-base tracking-tight opacity-70'>
                Футболка Owo дает ощутимую обратную связь в&nbsp;виртуальной реальности,
                как тактильный жилет, но&nbsp;с&nbsp;электрическим током до&nbsp;предела личной боли.</p>
            </div>
          </article>
        </li>

        <li className='w-[288px] shrink-0 mr-2.5'>
          <article className='rounded-l15 flex flex-col bg-nero pb-10 h-[442px]'>
            <div className='rounded-l15 mb-[23px]'>
              <picture>
                <img className='rounded-t-l15' width='288' height='147'
                  src='/image/content/image-11.png' alt='#' />
              </picture>
            </div>
            <div className='bg-white rounded-full px-[15px] py-[8px] inline-flex items-center w-auto m-4 self-start'>
              <span className='dot'></span>
              <p className='text-xxs tag-text'>3D</p>
            </div>
            <div className='px-5'>
              <h3 className='text-xl tracking-tight mb-5 w-9/12'>3D Max реально освоить самому</h3>
              <p className='text-base tracking-tight opacity-70'>
                Футболка Owo дает ощутимую обратную связь в&nbsp;виртуальной реальности,
                как тактильный жилет, но&nbsp;с&nbsp;электрическим током до&nbsp;предела личной боли.</p>
            </div>
          </article>
        </li>

        <li className='w-[288px] shrink-0 mr-2.5'>
          <article className='rounded-l15 flex flex-col bg-nero pb-10 h-[442px]'>
            <div className='rounded-l15 mb-[23px]'>
              <picture>
                <img className='rounded-l15' width='288' height='147'
                  src='/image/content/image-12.png' alt='#' />
              </picture>
            </div>
            <div className='bg-white rounded-full px-[15px] py-[8px] inline-flex items-center w-auto m-4 self-start'>
              <span className='dot'></span>
              <p className='text-xxs tag-text'>Новости</p>
            </div>
            <div className='px-5'>
              <h3 className='text-xl tracking-tight mb-5 w-9/12'>Самый инновационный
                ноутбук от Apple — MacBook Retina</h3>
              <p className='text-base tracking-tight opacity-70'>
                Футболка Owo дает ощутимую обратную связь в&nbsp;виртуальной реальности,
                как тактильный жилет, но&nbsp;с&nbsp;электрическим током до&nbsp;предела личной боли.</p>
            </div>
          </article>
        </li>
      </ul>

      <div className='px-9'>
        <PillowLink text='Все новости' link='#' />
      </div>


    </section>
  )
}