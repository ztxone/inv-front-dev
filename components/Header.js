import Logo from "./ui/Logo";
import Language from "./ui/Language";
import Burger from "./ui/Burger";
import MobileMenu from "./ui/MobileMenu";
import { useEffect, useState } from "react";
import Nav from "./ui/Nav";
import Order from "./ui/Order";
import useTranslation from "next-translate/useTranslation";
import { fetchAPI } from "lib/api";

export default function Header({ variant }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [menu, setMenu] = useState([]);
  const i18n = useTranslation();
  const locale = i18n.lang;

  useEffect(() => {
    async function fetchData() {
      const menuRes = await fetchAPI("/navigation/render/1", {
        fields: ["title", "path"],
        locale: locale,
      });
      setMenu(menuRes);
    }
    fetchData();
  }, [locale]);

  return (
    <header className="pt-[24px] pb-5 px-4 md:py-[17px] md:px-3.8 lg:py-10 relative text-inherit border-b border-light-grey">
      <div className="mx-auto flex justify-between items-center  md:px-0 lg:max-w-[1746px]">
        <Logo color="inherit" />
        <Language />
        <Burger onClick={() => setIsNavOpen((prev) => !prev)} color={variant} />
        {isNavOpen && (
          <MobileMenu menu={menu} onClose={() => setIsNavOpen(false)} />
        )}
        <Nav menu={menu} />
        <Order />
      </div>
    </header>
  );
}
