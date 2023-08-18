import TagsBrief from "./TagsBrief";
import ProjectForm from "./ProjectForm";
import ContactBrief from "./ContactBrief";
import ModalApprove from "../ui/ModalApprove";
import ButtonSubmit from "../ui/ButtonSubmit";
import { useForm, FormProvider } from "react-hook-form";
import sendBrief from "lib/sendBrief";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

export default function FormBrief({ visobjs, categories }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const methods = useForm();
  const { t } = useTranslation("common");

  const interiorTypes = [
    {
      id: 1,
      attributes: {
        name: "Интерьерная",
      },
    },
    {
      id: 2,
      attributes: {
        name: "Экстерьерная",
      },
    },
  ];

  const onSubmit = async (data) => {
    try {
      //await sendBrief(data);
      console.log(data);
    } catch (error) {
      console.error("Brief sending error:", error);
    }
  };

  const [isApproved, setIsApproved] = useState(false);

  const handleApproveChange = (approved) => {
    setIsApproved(approved);
  };

  return (
    <div className="container">
      <p
        className="pt-7
      md:text-1xl md:w-2/3 md:leading-7
      xl:w-full"
      >
        Оставьте заявку, либо звоните, мы пообщаемся и сами все за вас заполним:
        <Link href="tel:+78122010007">
          {" "}
          +7&nbsp;812&nbsp;201&nbsp;00&nbsp;07
        </Link>
      </p>
      <FormProvider {...methods}>
        <form
          className="pb-15 pr-18 lg:w-4/6"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <TagsBrief
            title="Выберите услугу"
            tags={categories}
            name="categories"
          />
          <TagsBrief
            title="Направление"
            tags={interiorTypes}
            name="ProjectType"
          />
          <ProjectForm title="Подробнее о вашем проекте" visobjs={visobjs} />

          <ContactBrief />
          <div className="lg:flex flex-row-reverse justify-between items-center">
            <ModalApprove onApproveChange={handleApproveChange} />
            <ButtonSubmit
              text="Отправить бриф"
              variant="blue"
              disabled={!isApproved}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
