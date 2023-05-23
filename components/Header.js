// import Link from 'next/link';
import Logo from "./ui/Logo";
import Language from "./ui/Language";
import Burger from "./ui/Burger";
import MobilMenu from './ui/MobilMenu';
import {useState} from "react";
import DesktopMenu from './ui/DesktopMenu';

export default function Header() {
  const [isNavOpen, setIsNavOpen]=useState(false); 

  return (
    <header className="py-6 px-4 border-b border-eclipse text-white md:py-[17px] md:px-3.8 h-20 lg:h-36 relative">
      <div className="mx-auto flex justify-between items-center  md:px-0 lg:max-w-[1746px]">
        <Logo color='white'/>
        <Language />
        <Burger onClick={() => setIsNavOpen((prev) => !prev)} />
        <div>
        {isNavOpen && <MobilMenu onClose={() => setIsNavOpen(false)}/>}
        <DesktopMenu/>
        </div>
      </div>
    </header>
  );
}
