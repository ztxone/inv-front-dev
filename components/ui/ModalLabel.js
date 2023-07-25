export default function ModalLabel({htmlFor, text, tooltipComponent=null}) {
  return (
    <label className='pb-2 text-fiord text-sl' htmlFor={htmlFor}>
      {text}
      {tooltipComponent}
    </label>
  );
}
