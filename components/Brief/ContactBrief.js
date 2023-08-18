import ModalFieldset from "../ui/ModalFieldset";
import ModalLabel from "../ui/ModalLabel";
import ModalInput from "../ui/ModalInput";
import { useFormContext } from "react-hook-form";

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
        {/* <ModalInput
          type="text"
          name="Name4"
          placeholder="Введите ваше имя"
          error={errors.Name4 && <span>This field is required</span>}
          ref={register}
        /> */}

        <input
          className="briefInput"
          type="text"
          name="Name"
          placeholder="Введите ваше имя"
          {...register("Name", { required: true })}
        />
      </ModalFieldset>

      <ModalFieldset>
        <ModalLabel htmlFor="Phone" text="Телефон" required={true} />
        <input
          className="briefInput"
          type="tel"
          name="Phone"
          placeholder="+7 (000) 000 00-00"
          //   error="{errors.Phone && <span>This field is required</span>}"
          {...register("Phone", { required: "Phone is required" })}
        />
      </ModalFieldset>

      <ModalFieldset>
        <ModalLabel htmlFor="Email" text="E-mail" required={false} />
        <input
          className="briefInput"
          type="email"
          name="Email"
          placeholder="Введите ваш e-mail"
          //error="{errors.Email&&<span>This field is required</span>}"
          {...register("Email", {
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
      </ModalFieldset>

      <ModalFieldset>
        <ModalLabel htmlFor="Company" text="Компания" required={false} />
        <input
          className="briefInput"
          type="text"
          name="Company"
          placeholder="Название вашей компании"
          //error="{errors.Company&&<span>This field is required</span>}"
          {...register("Company")}
        />
      </ModalFieldset>
    </div>
  );
}
