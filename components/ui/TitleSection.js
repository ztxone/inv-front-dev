const white = 'text-white';
const black = 'text-black';

export default function TitleSection({text, variantColor = 'black'}) {
  return (
    <div
      className={`${
        variantColor === 'black' ? black : white
        } border-b border-light-grey pt-20 pb-10
      lg:pt-10.5`}
    >
      <h1
        className='text-4xl tracking-tight
        md:text-6xl'
      >
        {text}
      </h1>
    </div>
  );
}
