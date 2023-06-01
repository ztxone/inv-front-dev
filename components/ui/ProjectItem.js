export default function ProjectItem({name, asp='aspect-[398/300]', aspTab='aspect-[804/858]', aspDesktop='aspect-square', children, color='bg-inherit'}) {
  return (
    <li className='w-full pb-5 mb-10 lg:max-w-[858px] lg:mb-0 lg:pb-0'>
      <div className={`${color} rounded-l15 ${asp} relative py-5 px-9
				   md:${aspTab}
				   lg:${aspDesktop}
           lg:-mt-36`}>
        {children}
      </div>
      <h3 className='text-xl text-black tracking-tight pb-[8px] border-b
    border-black-russian inline-block pt-[27px]
    lg:text-3.8xl'>{name}</h3>
    </li>
  )
}