export default function ModalLabel({htmlFor, text}) {
  return (
    <label className='pb-2 text-fiord text-sl' htmlFor={htmlFor}>{text}</label>
  )
}