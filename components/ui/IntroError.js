import useTranslation from 'next-translate/useTranslation';
import PillowLink from './PillowLink';

export default function IntroError() {
  const {t} = useTranslation('common');
  return (
    <div
      className='container py-6
      md:py-5'
    >
      <div
        className="w-full bg-[url('/image/content/bg-intro-mob.png')] bg-no-repeat bg-cover pt-15 pb-10 px-10 rounded-5xl flex flex-col justify-between md:bg-[url('/image/content/bg-intro.png')] md:bg-right-top-30 min-h-[463px] text-white mx-auto
    md:pb-33
lg:px-21 lg:pt-25 lg:pb-20"
      >
        <h3
          className='text-4xl tracking-tight md:w-9/12 mb-10
      lg:text-6xl
      lg:mb-7'
        >
          {t('brief.how_much')}
        </h3>
        <p
          className='pr-6 w-full mb-auto pb-5
      md:text-xl md:max-w-[378px] md:pr-0 md:w-2/4
      lg:text-1xl '
        >
          {t('brief.order')}
        </p>
        <PillowLink
          text='Вернуться на главную'
          link='/index'
          variantSvg='blue'
          variant='white'
        ></PillowLink>
        <PillowLink
          text='Заполнить бриф'
          link='/brief'
          variantSvg='dark'
          variant='white'
        ></PillowLink>
      </div>
    </div>
  );
}
