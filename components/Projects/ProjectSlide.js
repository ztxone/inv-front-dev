import Image from "next/image";

export default function ProjectSlide() {
  return (
    <div className='w-[266px] h-[151px] '>
      <Image className='w-full rounded-lr h-full'
        src='/image/content/video.png'
        width="266"
        height="151"
        alt=""
      />
    </div>
  );
}
