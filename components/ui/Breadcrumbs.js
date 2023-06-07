export default function BreadCrumbs({item1, link1, itemLast}) {
  return (
    <div className='pt-[12px] pb-[7px]
    md:pb-5
    lg:pb-15'>
      <ol className='flex text-base tracking-tight items-center opacity-50'>
        <li className='p-2 pl-0'>
          <a href={link1}>{item1}</a>
        </li>
        <li>/</li>
        <li className='p-2'>
          <a>{itemLast}</a>
        </li>
      </ol>
    </div>
  );
}
