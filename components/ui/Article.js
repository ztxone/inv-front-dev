import { getStrapiMedia } from "lib/media";
import Image from "next/image";

const colorInherit = "bg-inherit border-1 border-nobel text-nero2";
const colorNero = "bg-nero";

export default function Article({
  link,
  tag,
  title,
  text,
  variant = "colorNero",
}) {
  return (
    <article
      className={`${
        variant == "nero" ? colorNero : colorInherit
      } rounded-l15 flex flex-col  pb-6 
    h-full  w-full`}
    >
      <div className="rounded-l15 mb-[23px] w-full relative">
        <Image
          className="rounded-l15 md:w-full"
          width="288"
          height="147"
          src={getStrapiMedia(link)}
          alt={title}
        />

        <div
          className="bg-white rounded-full px-[15px] py-[8px] inline-flex items-center w-auto m-4 self-start
      absolute bottom-[5%] left-[5%] "
        >
          <span className="dot"></span>
          <p className="text-black-russian font-interTight uppercase font-medium text-xxs">
            {tag}
          </p>
        </div>
      </div>

      <div className="px-5 max-h-[170px] overflow-hidden">
        <h3
          className="text-xl tracking-tight mb-3.8 w-9/12
        md:text-2xl"
        >
          {title}
        </h3>
        <p
          className="text-baseHeight tracking-tight opacity-70
        md:pr-3.8"
        >
          {text}
        </p>
      </div>
    </article>
  );
}
