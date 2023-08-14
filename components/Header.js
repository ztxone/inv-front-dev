import Logo from './ui/Logo';
import Language from './ui/Language';
import Burger from './ui/Burger';
import MobileMenu from './ui/MobileMenu';
import {useEffect, useState} from 'react';
import Nav from './ui/Nav';
import Order from './ui/Order';
import useTranslation from 'next-translate/useTranslation';
import {fetchAPI} from 'lib/api';
import Line from './ui/Line';

export default function Header({variant}) {
  const [isNavOpen, setIsNavOpen]=useState(false);
  const [menu, setMenu]=useState([]);
  const i18n=useTranslation();
  const locale=i18n.lang;

  useEffect(() => {
    async function fetchData() {
      const menuRes=await fetchAPI('/navigation/render/1', {
        fields: ['title', 'path'],
        locale: locale,
      });
      setMenu(menuRes);
    }
    fetchData();
  }, [locale]);

  const colorLine=variant==='black'? 'eclipse':'grey';
  const headerClass=
    variant==='black'
      ? 'bg-black text-white'
      :'bg-whisper text-black-russian';

  return (
    <header className={`${headerClass} relative text-inherit`}>
      <div
        className='container flex justify-between items-center  
      pt-[24px] flex-wrap pb-5 md:py-[17px] lg:py-10 '
      >
        <Logo color='inherit' />
        <Language />
        <Burger onClick={() => setIsNavOpen((prev) => !prev)} color={variant} />
        {isNavOpen&&(
          <MobileMenu menu={menu} onClose={() => setIsNavOpen(false)} />
        )}
        <Nav menu={menu} />
        <Order />
      </div>
      <Line variantColor={colorLine} />
    </header>
  );
}
