import NavSubMenuItem from "./NavSubMenuItem";
import Loading from "./Loading";

export default function MobileSubMenu({ menu, opened, onClose }) {
  if (!menu) {
    return <Loading />;
  }
  return (
    <ul className="py-4">
      {menu
        .filter((item) => item.parent)
        .map((subItem) => (
          <span onClick={onClose}>
            <NavSubMenuItem
              key={subItem.id}
              link={subItem.path}
              text={subItem.title}
            />
          </span>
        ))}
    </ul>
  );
}
