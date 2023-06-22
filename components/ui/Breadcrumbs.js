import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import BreadCrumbsItems from './BreadcrumbsItem';


export default function BreadCrumbs({links}) {
  // const {t}=useTranslation('common');
  return (
    <div
      className='pt-[12px] pb-2.5 container
    md:pb-5
    lg:pb-10.5'
    >
      <ol className='flex text-base tracking-tight items-center opacity-50'>
        {links.map((item, i) => (
          <BreadCrumbsItems
            key={item.path}
            title={item.title}
            active={i===links.length-1}
            path={item.path}
          />
        ))}
      </ol>
    </div>
  );
}
