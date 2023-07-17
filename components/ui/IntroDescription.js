export default function IntroDescription({title, text}) {
  return (
    <div className="pt-6 pb-10 md:pr-18 
    lg:pr-10">
      <h3 className="uppercase font-bold pb-5
      md:pb-7">{title}</h3>
      <p className="leading-5
      md:text-1xl md:leading-[130%] w-[85%]">{text}</p>
    </div>
  );
}
