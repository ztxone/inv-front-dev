export default function Projects( { projects }) {
  return (
    <section className='bg-whisper rounded-5xl pt-16 text-blackRussian pb-20'>
      <div className='px-[15px]'>
        <div className='flex justify-between mb-10'>
          <h2 className='title-h1'>/ Проекты</h2>
          <span className='title-h1'>® /. 22</span>
        </div>

        <p className='tracking-tight border-b border-blackRussian pb-10'>Мы&nbsp;работаем с&nbsp;ведущими
          компаниями и&nbsp;брендами из&nbsp;различных отраслей.
          При создании могут решаться уникальные задачи, но&nbsp;это всегда проекты с&nbsp;характером</p>

        <ul className='pt-14'>
		{projects.map((project, i) => {
          <li className='w-full pb-5 mb-10'>
            <div className='aspect-[398/302] overflow-hidden
           bg-gradient-to-r from-chetwode-blue to-lucky-point rounded-l15 pl-9'>
              <div>
                <div className='bg-white rounded-full px-5 py-1 inline-flex items-center w-auto m-4'>
                  <span className='dot'></span>
                  <p className='text-xxs tag-text'>3D анимация</p>
                </div>
                <div className='bg-white rounded-full px-5 py-1 inline-flex items-center w-auto m-4'>
                  <span className='dot'></span>
                  <p className='text-xxs tag-text'>{project.attributes.predescription}</p>
                </div>
              </div>
              <div className='flex overflow-hidden'>
                <img className='rounded-l15 mr-[21px]' width='230' height='322' src='/image/content/murino-11.png' />
                <img className='rounded-l15' width='230' height='322' src='/image/content/murino-13.png' />
                <img className='rounded-l15' width='230' height='322' src='/image/content/murino-12.png' />
              </div>
            </div>

            <h3 className='project-title'>{project.attributes.title}</h3>
          </li>
		  })}
          {/* <li className='relative pb-5 mb-10'>
            <div className='absolute'>
              <div>
                <div className='bg-white rounded-full px-5 py-1 inline-flex items-center w-auto m-4'>
                  <span className='dot'></span>
                  <p className='text-xxs tag-text'>3D анимация</p>
                </div>
                <div className='bg-white rounded-full px-5 py-1 inline-flex items-center w-auto m-4'>
                  <span className='dot'></span>
                  <p className='text-xxs tag-text'>МОДЕЛИРОВАНИЕ</p>
                </div>
              </div>
            </div>
            <div className='aspect-[398/557]'>
              <img className='w-full h-full obj rounded-l15 object-cover' width='230'
                height='322' src='/image/content/time.png' />
            </div>
            <h3 className='project-title'>Жилой комплекс «ТАЙМ» </h3>
          </li>
          <li className='pb-5 mb-10'>
            <div className='bg-cornflower-blue rounded-l15 min-h-[300px] flex flex-col align-center'>
              <div className='bg-white rounded-full px-5 py-1 inline-flex items-center w-auto m-4 self-start'>
                <span className='dot'></span>
                <p className='text-xxs tag-text'>3D анимация</p>
              </div>
              <div className='block mx-auto'>
                <img width='154' height='117' src='/image/content/logo1.png' />
              </div>
            </div>
            <h3 className='project-title'>3D презентация ЖК «АВИАТОР» </h3>
          </li>

          <li className='pb-5 mb-10'>
            <div>
              <div className='bg-white rounded-full px-5 py-1 inline-flex items-center w-auto m-4 absolute'>
                <span className='dot'></span>
                <p className='text-xxs tag-text'>3D анимация</p>
              </div>
              <div className='overflow-hidden rounded-l15'>
                <img className='max-w-none' width='610' height='440' src='/image/content/anniversary.png' />
              </div>
            </div>
            <h3 className='project-title'>Агрохолдинг «ЮБИЛЕЙНЫЙ»</h3>
          </li>

          <li className='pb-5 mb-10'>
            <div className='bg-gulf-blue rounded-l15'>
              <div className='bg-white rounded-full px-5 py-1 inline-flex items-center w-auto m-4'>
                <span className='dot'></span>
                <p className='text-xxs tag-text'>3D анимация</p>
              </div>
              <div>
                <img width='635' height='527' src='/image/content/ptz.png' />
              </div>
            </div>
            <h3 className='project-title'>Конвейер ПТЗ</h3>
          </li>
          <li className='pb-5 mb-10'>
            <div className='bg-baker-chocolate rounded-l15'>
              <div className='bg-white rounded-full px-5 py-1 inline-flex items-center w-auto m-4'>
                <span className='dot'></span>
                <p className='text-xxs tag-text'>3D анимация</p>
              </div>
              <div className='mx-10.5'>
                <img width='420' height='420' src='/image/content/meatbrothers.png' />
              </div>
            </div>

            <h3 className='project-title'>Рекламный ролик «MEATBROTHERS»</h3>
          </li> */}
        </ul>
        <div className='text-center mb-20'>
          <p className='font-interTight opacity-5 font-semibold text-6xl'>More</p>
          <button className='button-all'>Вcе проекты
            <span className='bg-royal-blue rounded-full w-[37px] h-[37px] flex 
          justify-center items-center text-white ml-5'>&#8250;</span></button>
        </div>
      </div>

      <marquee className='marquee'> 3d Motion* / ВИЗУАЛИЗАЦИЯ^ / АНИМАЦИЯ / Motion Design# /</marquee>
    </section>
  )
}