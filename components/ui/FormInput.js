export default function FormInput({type, placeholder}) {
  return (
    <input
      className='input lg:w-[31.5%] lg:mr-7 border-transparent first-of-type:mt-6 
      md:first-of-type:mt-15
      lg:m-0 lg:first-of-type:m-0'
      type={type}
      placeholder={placeholder}
    />
  );
}
