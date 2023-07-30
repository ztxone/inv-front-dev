export default function ModalFieldset({children, order='order-1'}) {
  return (
    <fieldset className={`flex flex-wrap flex-col pb-6 md:w-5/12 ${order}`}>
      {children}
    </fieldset>
  );
}
