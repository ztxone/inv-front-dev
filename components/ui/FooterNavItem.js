export default function FooterNavItem({text, link="#"}) {
  return (
    <li className='mb-[8px]'>
      <a className=' text-inherit text-base opacity-50 tracking-tight p-2.5 hover:opacity-100
       pl-0 trans-default lg:text-lg' href={link}> {text}
      </a>
    </li>
  )
}