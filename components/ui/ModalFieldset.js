export default function ModalFieldset({
  children,
  order = "order-1",
  width = "w-5/12",
}) {
  return (
    <fieldset
      className={`relative flex flex-wrap flex-col pb-6 md:${width} ${order}`}
    >
      {children}
    </fieldset>
  );
}
