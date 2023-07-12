import Link from 'next/link';

export default function ModalApprove() {
  return (
    <div className="flex pb-9">
      <div className="flex items-center h-5 pt-6">
        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-2  border-link-water rounded focus:ring-blue-500 focus:ring-2" />
      </div>
      <div className="ml-3.8 text-sm text-left leading-[164%] opacity-50">
        <label htmlFor="helper-checkbox">Согласен на обработку и передачу персональных данных в соответствии с
          <Link href='#' className='underline'> Пользовательским соглашением</Link>
        </label>
      </div>
    </div>
  )
}