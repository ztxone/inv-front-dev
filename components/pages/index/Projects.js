import Title from '@/components/ui/Title';
// import ProjectItem from '@/components/ui/ProjectItem';
import Tag from '@/components/ui/Tag';
import Marquee from '@/components/ui/Marquee';


export default function Projects({projects}) {
  return (
    <section className='bg-whisper rounded-5xl pb-7 pt-16 md:pt-[60px] text-blackRussian
    md:pb-12 
    lg:pt-36 lg:pb-9 lg:rounded-7xl'>
      <div className='container'>
        <div className='px-3.8 
        lg:px-24.5 lg:pb-20
         '>
          <div className='flex flex-wrap justify-between
          lg:items-center lg:flex-nowrap lg:gap-20
          lg:pb-[26px]'>
            <Title text="/ Проекты" variant='black'></Title>
            <p className='order-last tracking-tight pb-[27px] pt-10  text-black w-full
          md:pr-[50%] md:pb-[16px] 
          lg:order-none lg:m-0 lg:p-0 lg:text-xl lg:w-[30%] lg:ml-auto'>Мы&nbsp;работаем с&nbsp;ведущими
              компаниями и&nbsp;брендами из&nbsp;различных отраслей.
              При создании могут решаться уникальные задачи, но&nbsp;это всегда проекты с&nbsp;характером</p>
            <Title text="® /. 22" variant='black'></Title>
          </div>


          <ul className='pt-14'>
            {projects.map((project, i) => (
              <li className='w-full pb-5 mb-10' key={i}>

                <div className='aspect-[398/302] overflow-hidden
           bg-gradient-to-r from-chetwode-blue to-lucky-point rounded-l15 pl-9'>
                  <div>
                    <div className='bg-white rounded-full px-5 py-1 inline-flex items-center w-auto m-4'>
                      <span className='dot'></span>
                      <p className='text-xxs tag-text'>3D анимация</p>
                    </div>
                    <div className='bg-white rounded-full px-5 py-1 inline-flex items-center w-auto m-4'>
                      <span className='dot'></span>
                      <p className='text-xxs tag-text'>{project.attributes.Predescription}</p>
                    </div>
                  </div>
                  <div className='flex overflow-hidden'>
                    <img className='rounded-l15 mr-[21px]' width='230' height='322' src='/image/content/murino-11.png' />
                    <img className='rounded-l15' width='230' height='322' src='/image/content/murino-13.png' />
                    <img className='rounded-l15' width='230' height='322' src='/image/content/murino-12.png' />
                  </div>
                </div>

                <h3 className='project-title'>{project.attributes.Title}</h3>
              </li>
            ))}
          </ul>
          <div className='text-center mb-20'>
            <p className='font-interTight opacity-5 font-semibold text-6xl'>More</p>
            <button className='button-all'>Вcе проекты
              <span className='bg-royal-blue rounded-full w-[37px] h-[37px] flex 
          justify-center items-center text-white ml-5'>&#8250;</span></button>
          </div>
        </div>
      </div>

      <Marquee item1='Визуализация^' item2='Motion*' item3='3D моделирование' />
    </section>
  )
}