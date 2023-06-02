export default function NavSubItem({link, text}) {
  return (
    <li>
      <a className='text-black text-sl lg:tracking-tight lg:opacity-60 lg:hover:text-royal-blue lg:hover:border-b lg:hover:border-royal-blue' href={link}>{text}</a>
    </li>
  );
}
