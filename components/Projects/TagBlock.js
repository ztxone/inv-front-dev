import TagItemSection from "../ui/TagItemSection";

export default function TagBlock({ tags = [] }) {
  return (
    <div className="container flex flex-wrap pb-6 pt-1.5 md:pb-0">
      {tags.map((tag) => (
        <TagItemSection
          key={tag.id}
          text={tag.attributes.Name}
          color="white"
          onClick=""
        />
      ))}
    </div>
  );
}
