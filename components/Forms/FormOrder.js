import {useForm} from 'react-hook-form';
import sendEmail from 'lib/email';
import Image from 'next/image';
import ModalLabel from '../ui/ModalLabel';
import ModalFieldset from '../ui/ModalFieldset';
import ModalInput from '../ui/ModalInput';
import Tooltip from '../ui/Tooltip';
import ModalApprove from '../ui/ModalApprove';
import ButtonSubmit from '../ui/ButtonSubmit';
import ModalSelect from '../ui/ModalSelect';

const FormOrder=() => {
  const {
    register,
    handleSubmit,

    formState: {errors},
  }=useForm();

  const onSubmit=async (data) => {
    try {
      await sendEmail(data);
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Email sending error:', error);
    }
  };

  return (
    <>
      <Image
        className='w-full bg-black min-h-[202px] object-cover rounded-t-5xl'
        src='/image/content/modal.png'
        width='398'
        height='202'
        alt=''
      />
      <div className='px-10 pb-15 pt-9 text-center'>
        <h2 className='text-xl pb-1.5'>Отправить заявку</h2>
        <p className='pb-15'>
          Оставьте свои контактные данные и мы вышлем вам Коммерческое
          предложение
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalFieldset>
            <ModalLabel htmlFor='name' text='Имя' />
            <Tooltip />
            <ModalInput
              type='text'
              id='name'
              placeholder='Введите ваше имя'
              error='{errors.name&&<span>This field is required</span>}'
              pattern='{...register("name", {required: true})}'
            />
          </ModalFieldset>

          <ModalFieldset>
            <ModalLabel htmlFor='phone' text='Телефон' />
            <Tooltip />
            <ModalInput
              type='tel'
              id='phone'
              placeholder='+7 (000) 000 00-00'
              error='{errors.phone&&<span>This field is required</span>}'
              pattern='{...register("phone", {required: "Phone is required"})}'
            />
          </ModalFieldset>

          <ModalFieldset>
            <ModalLabel htmlFor='email' text='E-mail' />
            <ModalInput
              type='email'
              id='email'
              placeholder='Введите ваш e-mail'
              error=' {errors.email&&<span>This field is required</span>}'
              pattern='{...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}'
            />
          </ModalFieldset>

          <ModalFieldset>
            <ModalLabel htmlFor='theme' text='Выберите направление' />
            <Tooltip />
            <ModalSelect />
          </ModalFieldset>
          <ModalApprove />
          <ButtonSubmit />
        </form>
      </div>
    </>
  );
};

export default FormOrder;
