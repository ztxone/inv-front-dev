export default function IntroDescription({title, text}) {
  return (
    <div>
      <h3 className="uppercase font-bold pt-12 pb-7">{title}</h3>
      <p className="leading-5">{text}</p>
    </div>
  );
}
