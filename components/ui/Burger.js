export default function Burger({onClick}) {
  return (
    <div
      className='ml-10 md:order-3 lg:hidden group trans-default'
      onClick={onClick}
    >
      <div className='HAMBURGER-ICON space-y-2 rotate-180'>
        <span className='block h-0.7 w-10 animate-pulse bg-white  group-hover:bg-suva-grey'></span>
        <span
          className='block h-0.7 w-8 animate-pulse bg-white
        group-hover:bg-suva-grey'
        ></span>
        <span
          className='block h-0.7 w-10 animate-pulse bg-white
        group-hover:bg-suva-grey'
        ></span>
      </div>
    </div>
  );
}
