const white="bg-white text-black";
const blue="bg-royal-blue text-white";

export default function TagItemSection({text, color="white", onClick}) {
  return (
    <div
      className={`${color==="white"? white:blue
        } w-fit rounded-full px-[21px] py-[11px] mb-[7px] mr-2.5
    md:mb-5 md:mr-5 md:px-6 md:py-4.5`}
      onClick={onClick}
    >
      <p
        className="text-sm text-inherit
      md:text-base"
      >
        {text}
      </p>
    </div>
  );
}
