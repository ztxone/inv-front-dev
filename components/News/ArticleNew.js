import { getStrapiMedia } from "lib/media";
import Image from "next/image";
import Link from "next/link";
import Tag from "../ui/Tag";

const colorInherit = "bg-white text-nero2";
const colorNero = "bg-nero";

export default function ArticleNew({
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
         rounded-l15 flex flex-col pb-10 mb-5
         md:pb-18
         lg:w-[31%] lg:mb-10`}
    >
      <div className="rounded-l15 w-full relative">
        <Image
          className="rounded-l15 md:w-full md:aspect-[804/287] object-cover"
          width="804"
          height="287"
          src={getStrapiMedia(image)}
          alt={title}
        />
        {tag.data && (
          //   <div className="bg-white rounded-full px-3.8 py-2 inline-flex items-center w-auto self-start absolute left-3 bottom-3">
          //     <span className=" bg-royal-blue rounded-full w-[4px] h-[4px] mr-[5px]"></span>
          //     <p className="text-black-russian font-interTight uppercase font-medium text-xxs">
          //       {tag.data.attributes.Name}
          //     </p>
          //   </div>
          <Tag
            key={tag.data.attributes.Name}
            text={tag.data.attributes.Name}
            href={tag.data.attributes.slug}
            usedFor="blog"
          />
        )}
      </div>
      <div className="pl-5 pt-7 pr-12">
        <h3
          className="text-xl tracking-tight mb-6
          md:text-2xl"
        >
          <Link href={`blog/${link}`}>{title}</Link>
        </h3>
        <p
          className="text-baseHeight tracking-tight opacity-70
        md:pr-3.8"
        >
          <Link href={`blog/${link}`}>{text}</Link>
        </p>
      </div>
    </article>
  );
}
