import TitleH3 from './TitleH3';
import FormButton from './FormButton';
import FormInput from './FormInput';

export default function FormService() {
  return (
    <form
      action=''
      method='get'
      className='flex flex-col pt-7 max-w-[562px] m-auto items-center justify-center pb-2.5 md:pt-10 
      lg:flex-nowrap lg:max-w-none 
      lg:px-10 lg:rounded-5xl lg:bg-nero2 lg:pb-[52px]'
    >
      <TitleH3 text='Оставить заявку' subtext='на консультацию' />
      <fieldset className='lg:grid grid-cols-3  items-center'>
      <FormInput type='text' placeholder='Имя' />
      <FormInput type='tel' placeholder='Телефон*' />
      <FormButton text='Отправить' />
      </fieldset>

    </form>
  );
}
