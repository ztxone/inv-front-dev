// import Link from 'next/link';
import Logo from "./ui/Logo";
import Language from "./ui/Language";
import Burger from "./ui/Burger";
import MobilMenu from './ui/MobilMenu';
import {useState} from "react";
import DesktopMenu from './ui/DesktopMenu';
import Nav from './ui/Nav';
import Order from './ui/Order';

export default function Header() {
  const [isNavOpen, setIsNavOpen]=useState(false); 

  return (
    <header className="py-6 px-4 border-b border-eclipse text-white md:py-[17px] md:px-3.8 lg:py-10 relative">
      <div className="mx-auto flex justify-between items-center  md:px-0 lg:max-w-[1746px]">
        <Logo color='white'/>
        <Language />
        <Burger onClick={() => setIsNavOpen((prev) => !prev)} />
        {isNavOpen && <MobilMenu onClose={() => setIsNavOpen(false)}/>}
        <Nav />
        <Order />
      </div>
    </header>
  );
}
