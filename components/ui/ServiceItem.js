import TitleH3 from "./TitleH3";
import {getStrapiMedia} from "lib/media";
import Image from "next/image";
import Link from "next/link";

export default function ServiceItem({
  title,
  subtitle,
  descriptionItem1,
  link,
  image="",
}) {
  return (
    <div
      className={`w-full h-[600px] mb-2.5 rounded-5xl relative
    md:mb-5
    lg:mb-0 lg:mr-7 lg:last-of-type:mr-0`}
    >
      <Link href={link} className='flex h-full rounded-5xl'>
        <div className='bg-nero3 w-full h-full z-10 p-9 rounded-5xl'>
          <TitleH3 text={title} subtext={subtitle} />
          <p
            className="bg-inherit relative z-10 text-lg w-9/12 pt-7"
          >
            {descriptionItem1}
          </p>
        </div>
        {image&&(
          <div
            className="absolute top-0 bottom-0 left-0 right-0 
      lg:max-w-full lg:min-w-fit"
          >
            <Image
              src={getStrapiMedia(image)}
              alt={title}
              width="398"
              height="600"
              quality={100}
              className="object-cover w-full
        h-full rounded-5xl object-left-bottom"
            />
          </div>
        )}
      </Link>
    </div>
  );
}
