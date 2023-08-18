import { useFormContext } from "react-hook-form";
import Loading from "../ui/Loading";
import TagItemBrief from "./TagItemBrief";
import { useState } from "react";

export default function TagsBrief({ title, name, tags = [] }) {
  const formContext = useFormContext();
  const { register } = formContext;
  const [selectedTag, setSelectedTag] = useState([]);

  if (!tags) {
    return <Loading />;
  }

  const selectTag = (tag) => {
    setSelectedTag(tag);
    register(name, { value: tag.attributes.name });
  };

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
        {tags.map((tag, key) => (
          <TagItemBrief
            color={
              selectedTag === tag
                ? title === "Направление"
                  ? "black"
                  : "blue"
                : "white"
            }
            key={key}
            text={tag.attributes.name}
            onClick={() => selectTag(tag)}
          />
        ))}
      </div>
    </div>
  );
}
{
  /* <TagItemBrief color='blue' text='Производство видео' onClick /> */
}
