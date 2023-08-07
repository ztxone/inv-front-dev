export default function TitleColor({textPart1, textPart2}) {
  return (
    <h2 className='text-4xl text-white tracking-tight flex items-end
    lg:text-6xl'> {textPart1}
      <span className='text-blue ml-2.5
      lg:ml-3.8'> {textPart2}</span>
    </h2>
  )
}