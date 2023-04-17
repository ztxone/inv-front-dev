import Socials from './Socials';

export default function Contact() {
  return (
    <div className='pb-15'>
      <ul className='flex flex-wrap pb-10'>
        <li>
          <a href="#" className='tracking-[-0.036em] text-base opacity-50 flex items-start mb-10 w-full'>
            <svg className='mr-2.5' width="16" height="20" viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.9995 0C3.93986 0 0.636719 3.30314 0.636719 7.3632C0.636719
               8.42222 0.853476 9.43334 1.28065 10.3687C3.12155 14.3971 6.65107
                18.6501 7.68921 19.8575C7.76699 19.9478 7.88038 19.9998
                 7.99971 19.9998C8.11904 19.9998 8.23243 19.9478 8.31021
                  19.8575C9.34794 18.6503 12.8775 14.3975 14.719 10.3687C15.1464
                   9.43334 15.3629 8.42222 15.3629 7.3632C15.3625 3.30314 12.0594
                    0 7.9995 0ZM7.9995 11.1877C5.89068 11.1877 4.17483 9.47182
                     4.17483 7.36299C4.17483 5.25396 5.89068
                      3.53812 7.9995 3.53812C10.1083 3.53812 11.8242 5.25396
                       11.8242 7.36299C11.8244 9.47182 10.1085 11.1877 7.9995 11.1877Z" fill="currentColor" />
            </svg><span className='w-2/4 leading-normal'>
              Санкт-Петербург, ул.&nbsp;Бела&nbsp;Куна&nbsp;34&nbsp;офис&nbsp;112</span>
          </a>
        </li>
        <li className='mr-10 text-lg tracking-[-0.036em]'>
          <a href="tel:+78122010007"> +7 812 201 00 07</a>
        </li>
        <li className='text-lg tracking-[-0.036em]'>
          <a href="mailto:info@invert.studio"> info@invert.studio</a>
        </li>
      </ul>
      <Socials />
    </div>
  )
}