import Link from "next/link";

export default function ProjectItemCarousel({ name, link, children }) {
  return (
    <div
      className="min-w-auto 
    md:pb-[31px] md:min-w-[562px]
    lg:pb-3.8"
    >
      <Link href={`/project/${link}`}>
        <div
          className="rounded-l15 relative p-5 mb-2.5 
        lg:mb-0 lg:pb-50
        aspect-[288/147]
        md:aspect-[562/367]
        "
        >
          {children}
        </div>
        <h3
          className="text-black text-base tracking-tight pb-0 border-b
        border-black-russian inline-block pt-[8px]
        md:text-2xl md:pt-7"
        >
          {name}
        </h3>
      </Link>
    </div>
  );
}
