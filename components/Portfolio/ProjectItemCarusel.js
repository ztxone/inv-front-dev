export default function ProjectItemCarusel({name, children}) {
  return (
    <div
      className='min-w-auto 
    md:pb-[31px] md:min-w-[562px]
    lg:pb-3.8'
    >
      <div
        className='rounded-l15 relative p-5 mb-2.5 
        lg:mb-0 lg:pb-50
        aspect-[288/147]
        lg:aspect-[562/367]
        '
      >
        {children}
      </div>
      <h3
        className='text-black text-base tracking-tight pb-0 border-b
        border-black-russian inline-block pt-[8px]
        md:text-2xl
        lg:pt-5'
      >
        {name}
      </h3>
    </div>
  );
}
