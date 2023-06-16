import NavSubMenuItem from "./NavSubMenuItem";
import Loading from "./Loading";

export default function MobileSubMenu({menu, opened}) {
  if (!menu) {
    return <Loading />;
  }
  return (
    <ul className="py-4">
      {menu
        .filter((item) => item.parent)
        .map((subItem) => (
          <NavSubMenuItem
            key={subItem.id}
            link={subItem.path}
            text={subItem.title}
          />
        ))}
    </ul>
  );
}

