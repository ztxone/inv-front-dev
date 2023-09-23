import { getStrapiMediaCarousel } from "lib/mediaCarousel";
import Link from "next/link";
import React from "react";

export const LoadFileBlock = (file) => {
  return (
    <Link
      href={getStrapiMediaCarousel(file.file)}
      download={"file.pdf"}
      target="_blank"
    >
      LoadFileBlock
    </Link>
  );
};
