import useTranslation from "next-translate/useTranslation";
import PillowLink from "./PillowLink";
import Title from "./Title";

export default function Form({pillowColor}) {
  const {t}=useTranslation("common");
  return (
    <div
      className="pb-9 pt-10.5  
    md:pt-16 md:pb-14
    lg:p-0 lg:mr-auto"
    >
      <Title
        text={t("footer.have_project")}
        subtext={t("footer.let_discuss")}
      />
      <div
        className="flex flex-wrap gap-5 pt-9 
      md:pt-12 md:gap-6
      lg:pt-15"
      >
        <PillowLink
          text={t("footer.order_call")}
          link="tel:#"
          variant={pillowColor}
          variantSvg="blueSvg"
        />
        <PillowLink
          text={t("brief.title_fill")}
          link="/brief"
          variant={pillowColor}
          variantSvg="blueSvg"
        />
      </div>
    </div>
  );
}
