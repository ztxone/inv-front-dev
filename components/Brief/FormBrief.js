import TagsBrief from './TagsBrief';
import ProjectForm from './ProjectForm';
import ContactBrief from './ContactBrief';
import ModalApprove from '../ui/ModalApprove';
import ButtonSubmit from '../ui/ButtonSubmit';

export default function FormBrief() {
  return (
    <div className='container'>
      <p className='pt-7'>
        Оставьте заявку, либо звоните, мы пообщаемся и сами все за вас заполним:
        <a href='tel:+78122010007'>+7&nbsp;812&nbsp;201&nbsp;00&nbsp;07</a>
      </p>
      <form className='pb-15 pr-18'>
        <TagsBrief title='Выберите услугу' />
        <TagsBrief title='Направление' />
        <ProjectForm title='Подробнее о вашем проекте' />
        <ContactBrief />
        <ModalApprove />
        <ButtonSubmit text='Отправить бриф' variant='blue' />
      </form>
    </div>
  );
}
