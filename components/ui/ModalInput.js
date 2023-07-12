export default function ModalInput({type, id, placeholder, error, pattern}) {
  return (
    <input className='py-3 px-5 w-full border border-link-water rounded-5xl' type={type} id={id} placeholder={placeholder} error={error} pattern={pattern} >
    </input>
  )
}