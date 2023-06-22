const white='text-white';
const black='text-black';

export default function TitleSection({text, variantColor='black'}) {
  return (
    <div
      className={`${variantColor==='black'? black:white
        } container border-b border-light-grey pt-[76px] pb-5
        md:pt-18 md:pb-6
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
