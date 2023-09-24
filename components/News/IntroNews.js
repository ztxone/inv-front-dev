import TagItemSection from "../ui/TagItemSection";
import TagItemContainer from "../ui/TagItemContainer";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import { getStrapiMediaCarousel } from "lib/mediaCarousel";

export default function IntroNews({ blog }) {
  const router = useRouter();
  const onClickLink = (link) => {
    router.push(`/${link}`);
  };

  return (
    <div>
      <div className="container pt-3">
        <TagItemContainer>
          {blog.attributes.tag.data && (
            <TagItemSection
              text={blog.attributes.tag.data?.attributes?.Name}
              color="white"
              onClick={() =>
                onClickLink(blog.attributes.tag.data?.attributes?.slug)
              }
            />
          )}
          <TagItemSection
            text="Новости"
            color="white"
            onClick={() => onClickLink("news")}
          />
        </TagItemContainer>
        <ReactMarkdown>{blog.attributes.Preview}</ReactMarkdown>
        {/* <p
          className="py-12
        md:text-xl
        xl:w-1/2"
        >
          Футболка Owo дает ощутимую обратную связь в виртуальной реальности,
          как тактильный жилет, но с электрическим током до предела личной боли.
        </p> */}
      </div>
      <Image
        className="w-full aspect-[428/244]
      md:aspect-[834/322]
      lg:aspect-[1920/742] lg:max-h-[742px]"
        src={getStrapiMediaCarousel(blog.attributes.Image_preview.data)}
        width="428"
        height="244"
        alt=""
      />
    </div>
  );
}
