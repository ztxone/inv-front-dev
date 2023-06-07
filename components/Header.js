// import Link from 'next/link';
import Logo from "./ui/Logo";
import Language from "./ui/Language";
import Burger from "./ui/Burger";
import MobilMenu from './ui/MobilMenu';
import {useState} from "react";
import Nav from './ui/Nav';
import Order from './ui/Order';

export default function Header({variant='white'}) {
  const [isNavOpen, setIsNavOpen]=useState(false); 

  const variantColorBurger={
    white: 'bg-white',
    black: 'bg-black',
  };

  return (
    <header className="pt-[24px] pb-5 px-4 md:py-[17px] md:px-3.8 lg:py-10 relative text-inherit border-b border-light-grey">
      <div className="mx-auto flex justify-between items-center  md:px-0 lg:max-w-[1746px]">
        <Logo color='inherit'/>
        <Language />
        <Burger onClick={() => setIsNavOpen((prev) => !prev)} color={variantColorBurger[variant]} />
        {isNavOpen && <MobilMenu onClose={() => setIsNavOpen(false)}/>}
        <Nav />
        <Order />
      </div>
    </header>
  );
}
