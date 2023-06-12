export default function TitleH3({text, subtext}) {
  if (!subtext) {
    return (
      <h2 className='text-3xl tracking-tight relative z-10 md:w-2/4'> {text}</h2>
    )
  }
  return (
    <h2 className='block text-center text-3xl tracking-tight relative z-10
    md:flex md:items-center gap-1 md:text-3.5xl
    lg:text-4xl'> {text} <span className='leading-5'>{subtext}</span></h2>
  )
}