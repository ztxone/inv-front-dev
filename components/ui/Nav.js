import Link from "next/link";
import Loading from "./Loading";
import NavSubMenu from "./NavSubMenu";
import { useState } from "react";

export default function Nav({ menu }) {
  if (!menu) {
    return <Loading />;
  }
  const [menuOpened, setMenuOpened] = useState(false);

  //console.log(menu);
  return (
    <nav className="hidden lg:block lg:mr-auto text-inherit">
      <ul className="flex items-center justify-between">
        {menu
          .filter((item) => !item.parent)
          .map((item) =>
            item.collapsed ? (
              <li key={item.id} className="group relative">
                <p
                  className="p-5 flex items-center cursor-pointer"
                  onClick={() => setMenuOpened(!menuOpened)}
                >
                  {item.title}
                  <svg
                    className="w-[10px] ml-[8px] group-hover:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 7"
                  >
                    <path d="m1 1.3 4 4 4-4" stroke="#fff" />
                  </svg>
                </p>
                <NavSubMenu menu={menu} opened={menuOpened} />
              </li>
            ) : (
              <li key={item.id}>
                <Link href={item.path} className="p-5">
                  {item.title}
                </Link>
              </li>
            )
          )}
        {/* <li>
          <a href="/about" className="p-5">
            О&nbsp;студии
          </a>
        </li>
        <li className="group relative">
          <p className="p-5 flex items-center cursor-pointer">
            Услуги
            <svg
              className="w-[10px] ml-[8px] group-hover:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 7"
            >
              <path d="m1 1.3 4 4 4-4" stroke="#fff" />
            </svg>
          </p>
          <ul className="hidden group-hover:block absolute left-8 min-w-[300px] min-h-[150px] bg-white rounded-[2px] p-6">
            <NavSubItem link="#" text="Архитектурная 3D визуализация" />
            <NavSubItem link="#" text="Продуктовая 3D визуализация" />
            <NavSubItem link="#" text="Моушн & Видеопродакшн" />
            <NavSubItem link="#" text="3D моделирование" />
          </ul>
        </li>
        <li>
          <a href="/works" className="p-5">
            Портфолио
          </a>
        </li>
        <li>
          <a href="/contacts" className="p-5">
            Контакты
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
