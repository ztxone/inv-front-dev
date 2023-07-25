import ModalInput from '../ui/ModalInput';
import ModalLabel from '../ui/ModalLabel';
import ModalFieldset from '../ui/ModalFieldset';
import Tooltip from '../ui/Tooltip';
import ModalSelect from '../ui/ModalSelect';
import Counter from '../ui/Counter';

export default function ProjectForm({title}) {
  return (
    <div
      className='pt-10.5
    md:pt-20 md:flex flex-wrap md:justify-between'
    >
      <h2
        className='mb-7 text-xl
      md:w-full
      lg:text-3.8xl'
      >
        {title}
      </h2>
      <ModalFieldset>
        <ModalLabel
          htmlFor='name'
          text='Название проекта'
          tooltipComponent=<Tooltip />
        />
        <ModalInput
          type='text'
          id='name'
          placeholder='Введите название вашего проекта'
          error=''
          pattern=''
        />
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel
          htmlFor='object'
          text='Объект визуализации'
          tooltipComponent=<Tooltip />
        />
        <ModalSelect
          option1='Коммерческая недвижимость'
          option2=''
          option3=''
          option4=''
        />
      </ModalFieldset>
      <ModalFieldset order='order-6'>
        <ModalLabel
          htmlFor='object'
          text='Общее количество необходимых ракурсов'
          tooltipComponent=<Tooltip />
        />
        <Counter />
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel
          htmlFor='project'
          text='Сроки проекта'
          tooltipComponent=<Tooltip />
        />
        <ModalInput
          type='number'
          id='project'
          placeholder='Введите сроки вашего проекта'
          error=''
          pattern=''
        />
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel
          htmlFor='square'
          text='Площадь помещений визуализации'
          tooltipComponent=<Tooltip />
        />
        <ModalInput
          type='number'
          id='square'
          placeholder='Введите площадь'
          error=''
          pattern=''
        />
      </ModalFieldset>
    </div>
  );
}
