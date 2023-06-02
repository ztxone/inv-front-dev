export default function FormInput({type, placeholder}) {
  return (
    <input
      className='input lg:w-[31.5%] border-transparent first-of-type:mt-2.5 
      md:first-of-type:mt-15
      lg:m-0 lg:first-of-type:mt-0 lg:max-w-1/3 lg:mr-2.5
      hover:border-white hover:border-opacity-40 hover:placeholder:text-white
      focus:border-white
      active:border-white active:outline-none'
      type={type}
      placeholder={placeholder}
    />
  );
}
