export default function Marquee({item1, item2, item3}) {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="py-12 animate-marquee whitespace-nowrap text-6xl tracking-tight text-black-russian
      md:text-7xl md:py-10
      lg:text-10xl">
        <span className="mx-4">{item1}</span>
        <span className="mx-4 text-blue">/</span>
        <span className="mx-4">{item2}</span>
        <span className="mx-4  text-blue">/</span>
        <span className="mx-4">{item3}</span>
        <span className="mx-4  text-blue">/</span>
      </div>
      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap text-6xl tracking-tight text-black-russian
      md:text-7xl md:py-10
      lg:text-10xl">
        <span className="mx-4">{item1}</span>
        <span className="mx-4 text-blue">/</span>
        <span className="mx-4">{item2}</span>
        <span className="mx-4  text-blue">/</span>
        <span className="mx-4">{item3}</span>
        <span className="mx-4  text-blue">/</span>
      </div>
    </div>
  )
}
