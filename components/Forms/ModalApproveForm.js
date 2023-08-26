import Link from 'next/link';

export default function ModalApproveForm({checked, setChecked, fullWidth=false}) {
const setValue = ()=>{
  setChecked(prev=>!prev)
}
  return (
    <div className={`flex pb-9 items-center md:pt-6 ${fullWidth?'w-full':'md:w-3/5 lg:max-w-[422px]'}`}>
      <div className='flex items-center h-5'>
        <input 
        checked={checked}
        onChange={setValue}
          id='helper-checkbox'
          aria-describedby='helper-checkbox-text'
          type='checkbox'
          className='w-6 h-6 text-blue-600 bg-gray-100 border-2  border-link-water rounded focus:ring-blue-500 focus:ring-2'
        />
      </div>
      <div className='ml-3.8 text-sm text-left leading-[164%] opacity-50'>
        <label htmlFor='helper-checkbox'>
          Согласен на обработку и передачу персональных данных в соответствии с
          <Link href='#' className='underline'>
            {' '}
            Пользовательским соглашением
          </Link>
        </label>
      </div>
    </div>
  );
}
