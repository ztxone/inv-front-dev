import Image from "next/image";
import { useState } from 'react'

export default function ProjectItemImage({ link, width, height, variant }) {
  let [loaded, setLoaded] = useState(false)
  if (variant === "imageBlock") {
    return (
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <Image
          className={`w-full h-full obj rounded-l15 object-cover ${loaded ? 'blur-0' : 'blur-xl'}`}
          width={width}
          height={height}
          src={link}
          loading="lazy"
          quality={100}
          onLoad={() => setLoaded(true)}
          alt="Project name"
        />
      </div>
    );
  }
  return (
    <div
      className={`w-[${width}px] absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-1/2
    md:top-[45%]`}
    >
      <Image
        width={width}
        height={height}
        src={link}
        alt="Project name"
        loading="lazy"
        // quality={100}
        className="md:w-full md:h-auto rounded-l15 object-cover"
      />
    </div>
  );
}
