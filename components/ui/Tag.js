export default function Tag({variant = 'white', text1, text2 = ''}) {
  return (
    <div className={text2 && 'z-2 relative flex gap-1 uppercase flex-wrap'}>
      {text2 && (
        <div
          className={`bg-${variant}  w-fit rounded-full px-1.5 py-[7px] inline-flex items-center relative z-3 uppercase`}
        >
          {/* <span className={`dot-${variant}`}></span> */}
          <span
            className={`text-l bold pr-1 text-${
              variant === 'white' ? 'blue' : 'white'
            }`}
          >
            {'# '}
          </span>
          <p
            className={`text-xxs tag-text text-${
              variant === 'white' ? 'black' : 'white'
            }`}
          >
            {' '}
            {text2}
          </p>
        </div>
      )}
      <div
        className={`bg-${variant}  w-fit rounded-full px-[16px] py-[7px] inline-flex items-center relative z-3`}
      >
        {/* <span className={`dot-${variant}`}></span> */}
        <span
          className={`text-l bold pr-1 text-${
            variant === 'white' ? 'blue' : 'white'
          }`}
        >
          {'# '}
        </span>
        <p
          className={`text-xxs tag-text text-${
            variant === 'white' ? 'black' : 'white'
          } uppercase`}
        >
          {' '}
          {text1}
        </p>
      </div>
    </div>
  );
}
