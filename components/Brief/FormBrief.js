import TagsBrief from './TagsBrief';
import ProjectForm from './ProjectForm';
import ContactBrief from './ContactBrief';
import ModalApprove from '../ui/ModalApprove';
import ButtonSubmit from '../ui/ButtonSubmit';
import Link from 'next/link';

export default function FormBrief() {
  return (
    <div className='container'>
      <p
        className='pt-7
      md:text-1xl md:w-2/3 md:leading-7
      xl:w-full'
      >
        Оставьте заявку, либо звоните, мы пообщаемся и сами все за вас заполним:
        <Link href='tel:+78122010007'> +7&nbsp;812&nbsp;201&nbsp;00&nbsp;07</Link>
      </p>
      <form
        className='pb-15 pr-18
      lg:w-4/6'
      >
        <TagsBrief title='Выберите услугу' />
        <TagsBrief title='Направление' />
        <ProjectForm title='Подробнее о вашем проекте' />
        <ContactBrief />
        <div className='lg:flex flex-row-reverse justify-between items-center'>
          <ModalApprove />
          <ButtonSubmit text='Отправить бриф' variant='blue' />
        </div>
      </form>
    </div>
  );
}
