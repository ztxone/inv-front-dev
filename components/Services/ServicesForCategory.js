import ServiceChildrenItem from "./ServicesChildrenItem";

export default function ServicesForCategory({ services }) {
  return (
    <div
      className="container
    md:flex flex-row md:overflow-hidden md:pb-5
    xl:overflow-visible"
    >
      {services &&
        services.map((service, key) => (
          <ServiceChildrenItem
            key={key}
            title={service.attributes.Title}
            path={service.attributes.slug}
            image={service.attributes.Image}
          />
        ))}
    </div>
  );
}
