import TitleH3 from './TitleH3';
import FormButton from './FormButton';

export default function FormService() {
  return (
    <form
      action=''
      method='get'
      className='pt-7 max-w-[562px] m-auto md:pt-10 lg:flex lg:max-w-none
      flex-wrap justify-between items-start 
      lg:px-10 lg:rounded-5xl lg:bg-nero2 lg:pb-[52px]'
    >
      <TitleH3 text='Оставить заявку' subtext='на консультацию' />
      <input
        className='input lg:w-[31.5%] lg:mr-7'
        type='text'
        placeholder='Имя'
      />
      <input
        className='input lg:w-[33.5%] lg:mr-7'
        type='tel'
        placeholder='Телефон*'
      />

          <div className='mt-7 md:flex items-center md:py-5 md:mt-0 lg:w-[30%] lg:py-0 lg:items-start'>
              <FormButton text='Отправить'/>
        <p
          className='footnote w-10/12 mt-5 md:mt-0 md:w-2/4
          lg:w-auto lg:text-xs'
        >
          нажимая на кнопку &laquo;Отправить&raquo;, вы&nbsp;соглашаетесь
          на&nbsp;
          <span className='underline'>обработку персональных данных</span>
        </p>
      </div>
    </form>
  );
}
