const grey = "bg-light-grey";
const eclipse = "bg-eclipse";

export default function Line({ variantColor = "eclipse", width = "" }) {
  return (
    <div
      className={`${variantColor === "eclipse" ? eclipse : grey} h-[2px] ${
        width != "full" && ""
      }`}
    />
  );
}
