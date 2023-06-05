export default function BreadCrumbs({item1, link1, itemLast}) {
  return (
    <div className='border-t border-light-grey mt-10 py-5'>
          <ol className='flex text-base tracking-tight items-center opacity-50'>
      <li className='p-2 pl-0'>
        <a href={link1}>{item1}
        </a>
      </li>
      <li>/</li>
      <li className='p-2'>
        <a>{itemLast}</a>
      </li>
    </ol>
    </div>
  );
}
