import React from "react";
import Image from "next/image";
import { getStrapiMediaCarousel } from "lib/mediaCarousel";

export const BlogSlide = ({ photo }) => {
  return (
    <div className="w-[266px] h-[151px] rounded-lr overflow-hidden">
      <Image
        className="w-full h-full"
        width="366"
        alt={photo.attributes.name}
        height="251"
        src={getStrapiMediaCarousel(photo)}
      />
    </div>
  );
};
