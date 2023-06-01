import Tag from './Tag';

export default function IntroItem({background, children}) {
  return (
    <div
      className={`block rounded-4xl ${background} bg-white w-full min-h-[219px] bg-no-repeat bg-cover bg-right p-6`}
    >
      {children}
    </div>
  );
}
