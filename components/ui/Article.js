import { getStrapiMedia } from "lib/media";
import Image from "next/image";
import Link from "next/link";

const colorInherit = "bg-inherit border-1 border-nobel text-nero2";
const colorNero = "bg-nero4";

export default function Article({
  link,
  image,
  tag,
  title,
  text,
  variant = "colorNero",
}) {
  return (
    <article
      className={`${variant == "nero" ? colorNero : colorInherit}
         rounded-l15 flex flex-col  h-[422px] pb-6 
         md:h-[471px]`}
    >
      <div className="rounded-l15 w-full relative">
        <Image
          className="rounded-l15 w-full"
          width="288"
          height="147"
          quality={100}
          src={getStrapiMedia(image)}
          alt={title}
        />

        <div
          className="bg-white rounded-full px-[15px] py-[8px] inline-flex items-center w-auto self-start mb-5 mt-10 ml-5
        absolute top-0 left-0 md:m-0"
        >
          <span className="bg-blue rounded-full w-[4px] h-[4px]"></span>
          {/* <span className="text-l bold pr-1 text-nero2">#</span> */}
          <p className="text-black-russian font-interTight uppercase font-medium text-xxs ml-2">
            {tag}
          </p>
        </div>
      </div>
      <div
        className=" px-5 overflow-hidden
      md:pt-6"
      >
        <h3
          className="text-xl tracking-tight mb-3.8 w-9/12
        md:text-2xl"
        >
          <Link href={`/blog/${link}`}>{title}</Link>
        </h3>
        <p
          className="text-baseHeight tracking-tight opacity-70
        md:pr-3.8"
        >
          <Link href={`/blog/${link}`}>{text}</Link>
        </p>
      </div>
    </article>
  );
}
