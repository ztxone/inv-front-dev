import setLanguage from "next-translate/setLanguage";
import RadioButton from "./Radio";
import Line from "./Line";

export default function Language({ lang }) {
  const setLanguageRu = () => {
    if (lang === "en") setLanguage("ru");
  };

  const setLanguageEn = () => {
    if (lang === "ru") setLanguage("en");
  };
  return (
    <div
      className="group relative ml-auto
    md:order-2
    lg:flex lg:gap-1 lg:order-none lg:mr-auto lg:ml-0"
    >
      <button
        type="button"
        className="flex lg:hidden items-center p-2"
        onClick={setLanguageRu}
      >
        <span className="group-hover:opacity-50 uppercase">{lang}</span>
        <svg
          className="fill-gray ml-2.5 lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="5"
          viewBox="0 0 10 5"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="m0 0 5 5 5-5H0Z" />
        </svg>
      </button>
      <button
        type="button"
        className="hidden lg:block p-2 "
        onClick={setLanguageRu}
      >
        <span className={lang === "en" ? "opacity-50" : ""}>RU</span>
      </button>
      <button type="button" className="hidden lg:block" onClick={setLanguageEn}>
        <span className={lang === "ru" ? "opacity-50" : ""}>EN</span>
      </button>
      <div className="absolute right-0 top-10 bg-white z-30 text-black py-2 invisible group-hover:visible lg:hidden">
        <RadioButton
          text="RU"
          id="ru"
          onClick={setLanguageRu}
          checked={lang === "ru"}
        />
        <Line variantColor="grey" />
        <RadioButton
          text="EN"
          id="en"
          onClick={setLanguageEn}
          checked={lang === "en"}
        />
      </div>
    </div>
  );
}

{
  /* <div
className='flex flex-col items-center ml-auto pr-2.5 md:order-2 lg:order-none lg:ml-0
lg:mr-auto trans-default'
>
<button
  type='button'
  onClick={async () => await setLanguage('ru')}
  className={`hover:text-suva-grey lg:block ${i18n.lang==='en'? ' mr-3.8':' text-suva-grey '
    }`}
>
  RU
</button>
<button
  type='button'
  onClick={async () => await setLanguage('en')}
  className={`hover:text-suva-grey lg:block ${i18n.lang==='ru'? ' ml-3.8':' text-suva-grey'
    }`}
>
  EN
</button>
<svg
  className='fill-gray ml-2.5 lg:hidden'
  xmlns='http://www.w3.org/2000/svg'
  width='10'
  height='5'
  viewBox='0 0 10 5'
>
  <path fillRule='evenodd' clipRule='evenodd' d='m0 0 5 5 5-5H0Z' />
</svg>
</div> */
}
