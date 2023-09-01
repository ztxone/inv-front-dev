const blue='text-royal-blue';
const inherit='text-inherit';

export default function TitleH3({text, subtext, variantColor='inherit'}) {
  if (!subtext) {
    return (
      <h2 className='text-3.5xl tracking-1.05 relative z-10 md:w-2/4 bg-inherit'> {text}</h2>
    )
  }
  return (
    <h2 className='block tracking-1.05 text-center text-3.5xl relative z-10
    md:flex md:items-center gap-1 md:text-3.5xl
    lg:text-4xl'> {text} <span className={`${variantColor==='inherit'? inherit:blue}  leading-5`}>{subtext}</span></h2>
  )
}