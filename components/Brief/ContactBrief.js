import ModalFieldset from '../ui/ModalFieldset';
import ModalLabel from '../ui/ModalLabel';
import Tooltip from '../ui/Tooltip';
import ModalInput from '../ui/ModalInput';

export default function ContactBrief() {
  return (
    <div className='mt-7'>
      <h2 className='mb-7 text-xl'>Контактные данные</h2>
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
        <ModalLabel htmlFor='company' text='Компания' />
        <ModalInput
          type='text'
          id='company'
          placeholder='Название вашей компании'
          error='{errors.name&&<span>This field is required</span>}'
          pattern='{...register("name", {required: true})}'
        />
      </ModalFieldset>
    </div>
  );
}
