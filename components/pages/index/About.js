import Image from 'next/image';

export default function About() {
  return (
    <section className='pt-50 md:pt-60 md:pb-50 lg:pt-56 pb-60 bg-[url("../public/image/content/about.jpg")] 
    bg-cover bg-no-repeat bg-center lg:px-20 px-4 -mt-25 lg:-mt-36 lg:pb-[334px]'>
      <div className='container lg:grid lg:grid-cols-[2fr, 1fr] lg:grid-rows-2 gap-5'>
        <h2 className='text-4xl tracking-tight mb-[116px] flex flex-col items-end md:items-start md:text-6xl xl:text-7.5xl md:mb-15'>Креативный продакшн <span className='mt-[17px] md:mt-5 flex items-baseline flex-wrap lg:mb-0'>
          <svg viewBox="0 0 53 37" className='fill-blue hidden md:block w-[47px] h-[31px] mr-2.5 lg:w-[63px] lg:h-[42px] xl:mr-7'>
            <path d="M34.53 1.25 51.5 18.5 34.53 35.75l-3.56-3.5L42.03 21H1v-5h41.03L30.97 4.75l3.56-3.5Z" />
          </svg>
          для вашего бизнеса</span>
        </h2>

        <div className='w-[398px] ml-auto xl:mt-[156px] md:pb-2.5 row-start-1 row-end-3 col-start-2 col-end-3'>
          <a href="#" className='bg-blackRussian relative block rounded-4xl w-[286px] h-[286px] p-[25px]'>
            <div className='absolute top-0 bottom-0 left-0 right-0'>
              <Image src='/image/content/flyer-paper-mockup.png' width="389"
                height="275" className='w-full rounded-4xl' alt="" />
            </div>

            <div className='relative z-1 flex flex-col items-start h-full'>
              <div className='bg-white rounded-full px-[11px] py-1 inline-flex items-center w-auto mb-5'>
                <span className='dot'></span>
                <p className='tag-text'>pdf</p>
              </div>
              <h3 className="title-h3 max-w-min">Архитектурная визуализация</h3>
              <div className='button-round bg-black-russian2 mt-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" width='11' height='7' viewBox="0 0 11 7">
                  <path d="M10 1 5.5 5 1 1" stroke="#fff" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width='9' height='2' viewBox="0 0 9 2">
                  <path stroke="#fff" d="M0 1.25h9" /></svg>
              </div>
            </div>
          </a>

          <a href="#" className='bg-blackRussian relative 
          block rounded-4xl w-[286px] h-[347px] p-[25px] -mt-25 ml-auto'>
            <div className='absolute top-0 bottom-0 left-0 right-0'>
              <Image className='rounded-4xl' src='/image/content/video.png'
                width='286' height='347'
                alt="" />
            </div>
            <div className='relative z-1 flex flex-col items-start h-full'>
              <div className='bg-white rounded-full px-[11px] py-1 inline-flex items-center w-auto mb-[16px]'>
                <span className='dot'></span>
                <p className='tag-text'>Showreel</p>
              </div>
              <h3 className="title-h3 max-w-min">Моушн & Видеопродакшн</h3>
              <div className="button-round bg-black-russian opacity-30 mt-auto">
                <svg width="9" height="11" viewBox="0 0 9 11" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 4.63397C9.16667 5.01888 9.16667 5.98113 8.5 6.36603L1.75 
              10.2631C1.08333 10.648 0.25 10.1669 0.25 9.39711L0.250001
               1.60289C0.250001 0.833085 1.08333 0.35196 1.75
                0.73686L8.5 4.63397Z" fill="white" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        <div className='hidden md:block w-[15px] h-[71px] mx-auto mt-25 mb-15 
        col-start-1 col-end-3 row-start-2 lg:self-end lg:mt-0 lg:mb-2.5'>
          <svg className='h-full' fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 71">
            <path d="M8.5 0v70m0 0 7.5-7.3M8.5 70 1 62.7" stroke="#fff" /></svg>
        </div>

      </div>

    </section>
  )
}