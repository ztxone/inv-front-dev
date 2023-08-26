import { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function ModalSelectForBrief({options,name}) {
  const [option, setOption] = useState()
  const { setValue, getValues } = useFormContext();
  const [isOpen, setIsOpen] = useState(false)
  const toggleOption = ()=>setIsOpen(prev=>!prev)
  const rootRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        console.log('close', isOpen);
        isOpen && setIsOpen(false);
      }
    };
  
    window.addEventListener('click', handleClick);
    return ()=>window.removeEventListener('click',handleClick)
  }, [isOpen]);
  
  console.log('render', isOpen);
  return (
    <div ref={rootRef}
      className='relative w-full text-fiord group
    lg:max-w-[422px]'
    >
      <input name='theme' id='theme' type='hidden' ></input>
      <div onClick={toggleOption} className='py-3 px-5 w-full border border-link-water rounded-5xl text-left cursor-pointer flex items-center justify-between'>
        <span className='opacity-50 whitespace-nowrap'>{option?option:getValues(name)}</span>
        <svg
          className='group-hover:rotate-180'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M7 10L12 15L17 10H7Z'
            fill='#737373'
          />
        </svg>
      </div>
      <ul className={`select__list ${isOpen?'block':'hidden' } absolute top-100 left-0 right-0 bg-white z-50 shadow-2xl`}>
        {options.map(option=>        
          <li key={option.id} className='relative border-b border-b-link-water p-3.8 cursor-pointer text-left' onClick={()=>{
            setOption(option.attributes.Title)
            setValue(name, option.attributes.Title)
            setIsOpen(false)
          }
          }>
            {option.attributes.Title}
          </li>)}

      </ul>
    </div>
  );
}
