import { useEffect } from "react";
import TagItemBrief from "./TagItemBrief";

export default function TagsBrief({
  title,
  categories,
  setCategory,
  category,
}) {
  useEffect(() => {
    setCategory(categories[0]);
  }, []);


  return (
    <div
      className="pt-10 pb-1.5
    md:pt-15"
    >
      <h2
        className="mb-7 text-xl
      md:text-1xl
      lg:text-3.8xl"
      >
        {title}
      </h2>
      <div className="flex flex-wrap">
        {categories.map((elem) => (
          <TagItemBrief
            key={elem.attributes.name}
            color={
              category?.attributes?.name === elem.attributes.name
                ? "blue"
                : "white"
            }
            text={elem.attributes.name}
            onClick={() => setCategory(elem)}
          />
        ))}
      </div>
    </div>
  );
}
{
  /* <TagItemBrief color='blue' text='Производство видео' onClick /> */
}
