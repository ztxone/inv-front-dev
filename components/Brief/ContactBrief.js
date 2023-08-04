import ModalFieldset from "../ui/ModalFieldset";
import ModalLabel from "../ui/ModalLabel";
import ModalInput from "../ui/ModalInput";
import { useFormContext } from "react-hook-form";

export default function ContactBrief() {
  const { register } = useFormContext();
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
        <ModalInput
          type="text"
          id="Name"
          placeholder="Введите ваше имя"
          error="{errors.Name&&<span>This field is required</span>}"
          pattern='{...register("Name", {required: true})}'
        />
      </ModalFieldset>

      <ModalFieldset>
        <ModalLabel htmlFor="Phone" text="Телефон" required={true} />
        <ModalInput
          type="tel"
          id="Phone"
          placeholder="+7 (000) 000 00-00"
          error="{errors.Phone&&<span>This field is required</span>}"
          pattern='{...register("Phone", {required: "Phone is required"})}'
        />
      </ModalFieldset>

      <ModalFieldset>
        <ModalLabel htmlFor="Email" text="E-mail" required={false} />
        <ModalInput
          type="email"
          id="Email"
          placeholder="Введите ваш e-mail"
          error=" {errors.Email&&<span>This field is required</span>}"
          pattern='{...register("Email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}'
        />
      </ModalFieldset>

      <ModalFieldset>
        <ModalLabel htmlFor="Company" text="Компания" required={false} />
        <ModalInput
          type="text"
          id="Company"
          placeholder="Название вашей компании"
          error="{errors.Company&&<span>This field is required</span>}"
          pattern='{...register("Company", {required: true})}'
        />
      </ModalFieldset>
    </div>
  );
}
