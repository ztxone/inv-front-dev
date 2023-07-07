import Image from "next/image";
import PillowLink from "../ui/PillowLink";
import { getStrapiMedia } from "lib/media";
import Link from "next/link";

export default function ServicesChildrenItem({ title, image, path }) {
  return (
    <div className="bg-white pt-9 rounded-5xl mb-10 relative">
      <h3 className="text-3xl ml-9 mb-12">
        <Link href={`/services/${path}`}>{title}</Link>
      </h3>
      {image && (
        <Image
          className="w-full rounded-b-5xl"
          src={getStrapiMedia(image)}
          width="398"
          height="466"
          alt={title}
        />
      )}
      <div className="absolute bottom-9 left-9">
        <PillowLink
          text="Заказать"
          link="#"
          variant="white"
          variantSvg="blueSvg"
        />
      </div>
    </div>
  );
}
