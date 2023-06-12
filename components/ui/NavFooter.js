import FooterNavItem from "./FooterNavItem";
import Loading from "./Loading";

export default function NavFooter({menu}) {
  //console.log(menu);
  if (!menu) {
    return <Loading />;
  }
  return (
    <div className="pb-5 px-3.8">
      <ul className="grid 
      md:grid-cols-2 md:grid-rows-4 md:grid-flow-col lg:gap-x-15 md:max-w-[62%]">
        {menu.map((item) => (
          <FooterNavItem key={item.id} text={item.title} link={item.path} />
        ))}
      </ul>
    </div>
  );
}
