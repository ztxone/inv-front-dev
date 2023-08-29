import ModalFieldset from "../ui/ModalFieldset";
import ModalLabel from "../ui/ModalLabel";
import { useFormContext } from "react-hook-form";
import ModalInputForBrief from "../ui/ModalInputForBrief";

export default function ContactBrief() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div
      className="mt-7
    md:flex flex-wrap md:justify-between"
    >
      <h2
        className="mb-7 text-xl
      md:w-full
      lg:text-3.8xl"
      >
        Контактные данные
      </h2>
      <ModalFieldset>
        <ModalLabel htmlFor="Name" text="Имя" required={true} />

        <ModalInputForBrief
          type="text"
          id="Name"
          placeholder="Введите ваше имя"
          error={errors.Name?.message}
          register={register}
          pattern={{ required: "This field is required" }}
        />
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel htmlFor="Phone" text="Телефон" required={true} />
        <ModalInputForBrief
          type="tel"
          id="Phone"
          placeholder="+7 (000) 000 00-00"
          error={errors?.Phone?.message}
          register={register}
          pattern={{ required: "Phone is required" }}
        />
      </ModalFieldset>

      <ModalFieldset>
        <ModalLabel htmlFor="Email" text="E-mail" required={false} />
        <ModalInputForBrief
          type="email"
          id="Email"
          placeholder="Введите ваш e-mail"
          error={errors.Email?.message}
          register={register}
          pattern={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          }}
        />
      </ModalFieldset>

      <ModalFieldset>
        <ModalLabel htmlFor="Company" text="Компания" required={false} />
        <ModalInputForBrief
          type="text"
          id="Company"
          placeholder="Название вашей компании"
          error={errors?.Company?.message}
          register={register}
          pattern={{ required: "This field is required" }}
        />
      </ModalFieldset>
    </div>
  );
}
