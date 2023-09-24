import { FormProvider, useForm } from "react-hook-form";
import sendEmail from "lib/email";
import Image from "next/image";
import ModalLabel from "../ui/ModalLabel";
import ModalFieldset from "../ui/ModalFieldset";
import ButtonSubmit from "../ui/ButtonSubmit";
import ModalInputForBrief from "../ui/ModalInputForBrief";
import ModalApproveForm from "./ModalApproveForm";
import { useContext, useState } from "react";
import { sendCallOrder } from "lib/sendCallOrder";
import { ToastrContext } from "../Toastr/ToastrProvider";

const options = [
  {
    attributes: { Title: "Архитектурная 3D визуализация" },
  },
  {
    attributes: { Title: "Продуктовая 3D визуализация" },
  },
  {
    attributes: { Title: "Моушн & Видеопродакшн" },
  },
  {
    attributes: { Title: "3D моделирование" },
  },
];

export const FormOrderCall = ({ title, onClose }) => {
  // const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(false);
  const methods = useForm();
  const { setOpen, setSuccess, setMessage, Confirmation_Form_Phone } =
    useContext(ToastrContext);
  const openSuccessToast = () => {
    setMessage(Confirmation_Form_Phone);
    setSuccess(true);
    setOpen(true);
  };
  const openErrorToast = () => {
    setSuccess(false);
    setOpen(true);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await sendCallOrder(data);
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
      });
      onClose();
      openSuccessToast();
      // console.log("Email sent successfully!");
    } catch (error) {
      openErrorToast();
      // console.error("Email sending error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Image
        className="w-full bg-black min-h-[202px] object-cover rounded-t-5xl"
        src="/image/content/modal.png"
        width="398"
        height="202"
        alt=""
      />
      <div className="px-10 pb-15 pt-9 text-center">
        <h2 className="text-xl pb-1.5">Заказать звонок</h2>
        <p className="pb-15">{title}</p>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <ModalFieldset width="w-full">
              <ModalLabel
                htmlFor="name"
                text="Имя"
                align="text-left"
                required={true}
              />
              <ModalInputForBrief
                type="text"
                id="name"
                placeholder="Введите ваше имя"
                name={"Name"}
                error={methods.formState.errors.name?.message}
                pattern={{ required: "This field is required" }}
                register={methods.register}
              />
            </ModalFieldset>

            <ModalFieldset width="w-full">
              <ModalLabel
                htmlFor="phone"
                text="Телефон"
                align="text-left"
                required={true}
              />
              <ModalInputForBrief
                type="tel"
                id="phone"
                placeholder="+7 (000) 000 00-00"
                error={methods.formState.errors.phone?.message}
                name={"phone"}
                pattern={{ required: "Phone is required" }}
                register={methods.register}
              />
            </ModalFieldset>

            <ModalApproveForm name={"approve"} fullWidth />
            <ButtonSubmit
              disabled={!methods.formState.isValid}
              fullWidth
              loading={loading}
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
