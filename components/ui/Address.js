import AddressTitle from './AddressTitle';
import AddressText from './AddressText';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export default function Address({address, phone, email}) {
  const {t}=useTranslation('common');
  return (
    <div
      className='pb-6 md:flex md:pb-0
    lg:w-2/3 justify-between'
    >
      <div className='md:max-w-[282px] md:pr-5 md:mr-10.5'>
        <AddressTitle title={t`contacts.address`} />
        <AddressText text={address} />
      </div>
      <div
        className='md:pl-7
      lg:pr-24.5'
      >
        <AddressTitle title={t`contacts.numbers`} />
        <p
          className='w-2/4 tracking-tight pb-5
        md:w-auto md:text-1xl md:pb-0'
        >
          {phone}
          <br />
          <Link href={`mailto:${email}`}>{email}</Link>
        </p>
      </div>
    </div>
  );
}
