export default function ProjectItemCarusel({name, children}) {
  return (
    <div className='md:pb-[31px]
    lg:pb-3.8'>
      <div
        className='rounded-l15 relative p-5 mb-2.5 
        lg:mb-0 lg:pb-50
        aspect-[288/147]
        '
      >
        {children}
      </div>
      <h3
        className='text-black text-base tracking-tight pb-0 border-b
        border-black-russian inline-block pt-[8px]
        md:text-1xl
        lg:pt-5'
      >
        {name}
      </h3>
    </div>
  );
}
