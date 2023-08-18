export default function ModalInput({
  type,
  name,
  placeholder,
  error,
  ref,
  ...inputProps
}) {
  return (
    <div className="modal-input-container">
      <input
        className="py-3 px-5 w-full border border-link-water rounded-5xl
    lg:max-w-[422px] lg:py-3.8"
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
        {...inputProps}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
