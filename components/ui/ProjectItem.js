export default function ProjectItem({name, children}) {
  return (
    <li className='w-full pb-5 mb-10 lg:max-w-[858px] lg:mb-0 lg:pb-0'>
      {children}
      <h3 className='text-xl text-black tracking-tight pb-[8px] border-b
    border-black-russian inline-block pt-[27px]
    lg:text-3.8xl'>{name}</h3>
    </li>
  )
}