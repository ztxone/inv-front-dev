import IntroDescription from "@/components/ui/IntroDescription";
import ServicesSlides from "@/components/Services/ServicesSlides";

export default function AboutIntro({title1, text1, title2, text2}) {
  return (
    <div className='pb-15 lg:flex flex-wrap max-w-[1746px]
    lg:mx-auto'>
      <IntroDescription
        title={title1}
        text={text1}
      />
      <ServicesSlides />
      <IntroDescription
        title={title2}
        text={text2}
      />
    </div>
  )
}