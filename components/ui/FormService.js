import FormFieldset from "./FormFieldset";
import TitleH3 from "./TitleH3";
import FormButton from "./FormButton";
import { FormProvider, useForm } from "react-hook-form";

function FormInput({ type, id, placeholder, register, name, pattern }) {
  return (
    <input
      className="w-full pt-[17px] pb-[14px] px-7 bg-nero rounded-lr mb-2.5 border-transparent
      xl:mb-0 xl:mr-7
      hover:border-white hover:border-opacity-40 hover:placeholder:text-white
      focus:border-white
      active:border-white active:outline-none"
      type={type}
      id={id}
      placeholder={placeholder}
      {...register(name, pattern)}
    />
  );
}

export default function FormService() {
  const methods = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // await sendEmail(data);
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Email sending error:", error);
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        action=""
        method="get"
        className="flex flex-col pt-7 max-w-[562px] m-auto items-center justify-center pb-2.5
      md:pt-10 
      lg:max-w-none lg:px-10 lg:rounded-5xl lg:pb-[52px] lg:mt-5
      xl:border-2 border-eclipse "
      >
        <TitleH3
          text="Оставить заявку"
          subtext="на&#160;консультацию"
          variantColor="blue"
        />
        <FormFieldset>
          <FormInput
            id={"name"}
            name={"Name"}
            pattern={{ required: "Name is required" }}
            register={methods.register}
            type="text"
            placeholder="Имя"
          />
          <FormInput
            type="tel"
            id="phone"
            placeholder="Телефон*"
            name={"phone"}
            pattern={{ required: "Phone is required" }}
            register={methods.register}
          />
          <FormButton text="Отправить" />
        </FormFieldset>
      </form>
    </FormProvider>
  );
}
