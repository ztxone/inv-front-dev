import { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

export function RadioButton({ text, value }) {
  return (
    <div className="flex items-center cursor-pointer">
      <input
        id={text}
        type="radio"
        name="default-radio"
        defaultChecked={value === text}
        // checked={value===text}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 dark:bg-gray-700  cursor-pointer"
      ></input>
      <label htmlFor={text} className="p-2 cursor-pointer">
        {text}
      </label>
    </div>
  );
}

export default function ModalSelectForBrief({ options, name }) {
  const [option, setOption] = useState();
  const { setValue, getValues } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOption = () => setIsOpen((prev) => !prev);
  const rootRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isOpen]);

  return (
    <div
      ref={rootRef}
      className="relative w-full text-fiord group lg:max-w-[422px]"
    >
      <input name="theme" id="theme" type="hidden"></input>
      <div
        onClick={toggleOption}
        className="py-3 px-5 w-full min-w-[292px] border border-link-water rounded-5xl text-left cursor-pointer flex items-center justify-between"
      >
        <span className="opacity-50 whitespace-nowrap">
          {option ? option : getValues(name)}
        </span>
        <svg
          className={isOpen ? "group-hover:rotate-180" : undefined}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 10L12 15L17 10H7Z"
            fill="#737373"
          />
        </svg>
      </div>
      <ul
        className={`select__list ${
          isOpen ? "block" : "hidden"
        } absolute top-100 left-0 right-0 bg-white z-50 shadow-2xl`}
      >
        {options.map((elem) => (
          <li
            key={elem.id}
            className="relative border-b border-b-link-water p-3.8 cursor-pointer text-left"
            onClick={() => {
              setOption(elem.attributes.Title);
              setValue(name, elem.attributes.Title);
              setIsOpen(false);
            }}
          >
            <RadioButton text={elem.attributes.Title} value={option} />
          </li>
        ))}
      </ul>
    </div>
  );
}
