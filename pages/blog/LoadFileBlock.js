import { getStrapiMediaCarousel } from "lib/mediaCarousel";
import Link from "next/link";
import React from "react";

export const LoadFileBlock = (file) => {
  console.log(file);

  return (
    // <a href={getStrapiMediaCarousel(file)} download={true}>
    <Link
      href="https://inv.ptzsite.ru/uploads/Aleksandr_Kochnev_23a16c6863.pdf"
      download={"file.pdf"}
    >
      LoadFileBlock
    </Link>
  );
};
