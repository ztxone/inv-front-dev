import AddressTitle from './AddressTitle';
import AddressText from './AddressText';

export default function Address() {
  return (
    <div className='container  px-3.8 lg:max-w-[1746px] py-5'>
      <AddressTitle title='адрес офиса' />
      <AddressText text='Россия, Санкт-Петербург, ул.&#160;Бела&#160;Куна 34 офис 112' />
      <AddressTitle title='как связаться' />
      <AddressText text='8 (812) 909-25-33 info@invert.studio ' />
    </div>
  );
}
