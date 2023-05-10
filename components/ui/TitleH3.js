export default function TitleH3({text, subtext}) {
  return (
    <h2 className='flex flex-col text-3xl tracking-tight mb-9 relative z-10'> {text} <span>{subtext}</span></h2>
  )
}