import {Container} from 'postcss';

import BreadCrumbs from '../../ui/Breadcrumbs';
import useTranslation from 'next-translate/useTranslation';
import TitleSection from '@/components/ui/TitleSection';

export default function IntroContacts({info}) {
  return (
    <div className='container lg:max-w-[1746px]'>
      <TitleSection text='Контакты' />
      <BreadCrumbs
        item1='Главная'
        link1='/index'
        // itemLast={info.attributes.Title}
        itemLast='Контакты'
      />
    </div>
  );
}
