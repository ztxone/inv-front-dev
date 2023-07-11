export default function ModalLabel({htmlFor, text}) {
    return (
        <label className='pb-2.5 text-fiord text-base' htmlFor={htmlFor}>{text}</label>
    )
}