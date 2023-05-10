// import Link from 'next/link';
import Logo from "./ui/Logo";
import Nav from "./ui/Nav";
import Language from "./ui/Language";
import Order from "./ui/Order";
import Burger from "./ui/Burger";

export default function Header() {
  return (
    <header className="py-6 px-4 border-b border-eclipse text-white md:py-[17px] md:px-3.8 h-20 lg:h-36 relative">
      <div className="mx-auto flex justify-between items-center  md:px-0 lg:max-w-[1746px]">
        <Logo />
        <Language />
        <Nav />
        <Order />
        <Burger />
      </div>
    </header>
  );
}
