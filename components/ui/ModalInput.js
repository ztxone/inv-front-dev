export default function ModalInput({type, id, placeholder, error, pattern}) {
  return (
    <>
    <input className='py-3 px-5 w-full border border-link-water rounded-5xl
    lg:max-w-[422px] lg:py-3.8' type={type} id={id} placeholder={placeholder} pattern={pattern} error={error} />
    </>
  )
}


