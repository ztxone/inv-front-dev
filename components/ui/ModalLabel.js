export default function ModalLabel({htmlFor, text, required}) {
  return (
    <label className='pb-2 text-fiord text-sl' htmlFor={htmlFor}>
      {text}
      {required&&<span className="red">*</span>}
    </label>
  );
}
