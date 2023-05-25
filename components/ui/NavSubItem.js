export default function NavSubItem({link, text}) {
  return (
    <li>
      <a className='text-black text-sl' href={link}>{text}</a>
    </li>
  );
}
