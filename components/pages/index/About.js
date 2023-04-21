export default function About() {
  return (
    <section className='pt-24 bg-[url("../public/image/content/about.jpg")] px-4 pb-6'>
      <h2 className='title-h1 mb-32'>Креативный продакшн <span>
        для вашего бизнеса</span></h2>

      <a href="#" className='bg-blackRussian relative block rounded-4xl w-[286px] h-[286px]'>
        <picture>
          <img src='/image/content/flyer-paper-mockup.png' width="389"
            height="275" className='w-full rounded-4xl' alt="#" />
        </picture>

        <div className='absolute top-6 left-6'>
          <div className='bg-white rounded-full px-5 py-1 inline-flex items-center w-auto m-4'>
            <span className='dot'></span>
            <p className='tag-text'>pdf</p>
          </div>
          <h3 className="title-h3 max-w-min">Архитектурная визуализация</h3>
          <div className='button-round'>
            <svg xmlns="http://www.w3.org/2000/svg" width='11' height='7' viewBox="0 0 11 7">
              <path d="M10 1 5.5 5 1 1" stroke="#fff" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width='9' height='2' viewBox="0 0 9 2">
              <path stroke="#fff" d="M0 1.25h9" /></svg>
          </div>
        </div>
      </a>

      <a href="#" className='bg-blackRussian relative block rounded-4xl w-[286px] h-[347px]'>
        <picture>
          <img className='rounded-4xl' src='/image/content/video.png'
            width='286' height='347'
            alt="#" />
        </picture>
        <div className='absolute top-6 left-6'>
          <div className='bg-white rounded-full px-5 py-1 inline-flex items-center w-auto m-4'>
            <span className='dot'></span>
            <p className='tag-text'>Showreel</p>
          </div>
          <h3 className="title-h3 max-w-min">Моушн & Видеопродакшн</h3>
          <div className='button-round bg-blackRussian'>
            <svg width="9" height="11" viewBox="0 0 9 11" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 4.63397C9.16667 5.01888 9.16667 5.98113 8.5 6.36603L1.75 
              10.2631C1.08333 10.648 0.25 10.1669 0.25 9.39711L0.250001
               1.60289C0.250001 0.833085 1.08333 0.35196 1.75
                0.73686L8.5 4.63397Z" fill="white" />
            </svg>
          </div>
        </div>
      </a>
    </section>
  )
}