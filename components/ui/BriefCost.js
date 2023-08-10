import useTranslation from 'next-translate/useTranslation';
import PillowLink from './PillowLink';

export default function BriefCost({title}) {
  const {t}=useTranslation('common');
  return (
    <div
      className='py-6
      md:py-5
      lg:py-0 lg:col-span-2 lg:ml-7'
    >
      <div
        className="w-full bg-[url('/image/content/bg-intro-mob.png')] bg-no-repeat bg-cover pt-15 pb-10 px-10 rounded-5xl flex flex-col justify-between md:bg-[url('/image/content/bg-intro.png')] md:bg-right-top-30 min-h-[463px] text-white mx-auto
    md:pb-33 md:justify-start
lg:px-20 lg:h-full"
      >
        <h3
          className='text-4xl tracking-tight md:w-9/12 mb-10
      lg:text-6xl
      lg:mb-7'
        >
          {title}
        </h3>
        <p
          className='pr-6 w-full mb-auto pb-5 max-w-[319px]
      md:text-xl md:pr-0 md:mb-0 md:pb-25
      lg:text-1xl'
        >
          {t('brief.order')}
        </p>
        <PillowLink
          text={t('brief.fill')}
          link='/brief'
          variantSvg='dark'
          variant='white'
        ></PillowLink>
      </div>
    </div>
  );
}
