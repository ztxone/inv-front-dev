const blue = "bg-royal-blue text-white";
const black = "bg-black-russian text-white uppercase";

export default function ButtonSubmit({
  text = "Оформить заявку",
  variant = "black",
  disabled = false,
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${variant === "blue" ? blue : black} w-full py-4.5 rounded-5xl
        md:max-w-fit px-6`}
    >
      {text}
    </button>
  );
}
