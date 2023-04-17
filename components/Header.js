// import Link from 'next/link';
import Logo from "./ui/Logo";
import Nav from "./ui/Nav";
import Language from "./ui/Language";
import Order from "./ui/Order";
import Burger from "./ui/Burger";

export default function Header() {
  return (
    <header className="py-6 px-4 items-center">
      <div className="container mx-auto flex flex-row justify-between">
        <Logo />
        <Language />
        <Nav />
        <Order />
        <Burger />
      </div>
    </header>
  );
}
