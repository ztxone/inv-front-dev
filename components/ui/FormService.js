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
      lg:px-10 lg:rounded-5xl lg:pb-[52px]
      lg:mt-5'
    >
      <TitleH3 text='Оставить заявку' subtext='на&#160;консультацию' />
      <fieldset className='lg:flex items-center lg:mt-12 lg:justify-between
      lg:w-full'>
        <FormInput type='text' placeholder='Имя' />
        <FormInput type='tel' placeholder='Телефон*' />
        <FormButton text='Отправить' />
      </fieldset>
    </form>
  );
}
