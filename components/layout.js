import Header from './Header';
import Footer from './Footer';

export default function Layout({
  bg,
  headerBg,
  footerBg,
  children,
  pillowColor,
  variantSvg = 'whiteSvg',
}) {
  return (
    <div
      className={
        bg === 'black'
          ? 'bg-black text-white divLayout'
          : 'bg-whisper text-black-russian divLayout min-h-screen flex flex-col justify-between'
      }
    >
      <Header variant={headerBg} variantSvg={variantSvg} />
      <main className='flex-1'>{children}</main>
      <Footer variant={footerBg} pillowColor={pillowColor} />
    </div>
  );
}
