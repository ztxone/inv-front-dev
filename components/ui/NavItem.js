export default function NavItem({text, link='#'}) {
    return (
        <a href={link} className='py-3.8 text-1xl text-black tracking-tight flex justify-between border-t border-eclipse border-opacity-20'>
        {text}
        <svg className='w-4.5'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 15"><path d="M0 7.5h19m0 0L12.83 1M19 7.5 12.83 14" stroke="#000" stroke-width="1.5"/></svg>
      </a>
    )
}