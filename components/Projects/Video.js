export default function Video() {
  return (
    <div className='bg-[url("../public/image/content/video.png")] bg-no-repeat bg-center bg-cover w-full min-h-[561px] relative mt-2.5 md:aspect-square'>
      <video className='w-full h-full min-h-[561px]' >
        {/* <source src="#" type="video/mp4"></source>
      <source src="#" type="video/webm">
        <p>
          Ваш браузер не поддерживает встроенные видео. Попробуйте скачать его по
          <a href="#">этой ссылке</a>.
        </p>
      </source> */}
      </video>
      <svg viewBox="0 0 36 43" className='w-[36px] h-[43px] absolute top-1/2 left-1/2 cursor-pointer
      md:w-[86px] md:h-[86px]'>
        <path d="M33.4217 17.2697C36.5342 19.231 36.5342 23.7688 33.4217 25.7301L7.85702 41.8395C4.52747 43.9376 0.191389 41.5448 0.191389 37.6093L0.19139 5.39047C0.191391 1.45501 4.52746 -0.937803 7.85701 1.16029L33.4217 17.2697Z" fill="white" />
      </svg>
    </div>

  )
}