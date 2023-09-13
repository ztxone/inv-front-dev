import TagsBrief from "./TagsBrief";
import ProjectForm from "./ProjectForm";
import ContactBrief from "./ContactBrief";
import ButtonSubmit from "../ui/ButtonSubmit";
import { useForm, FormProvider } from "react-hook-form";
import sendBrief from "lib/sendBrief";
import Link from "next/link";
import ModalApproveForm from "../Forms/ModalApproveForm";
import { useState } from "react";
import { ProjectAngles } from "./ProjectAngles";
import TagsBriefDirection from "./TagsBriefDirection";

export default function FormBrief({ visobjs, categories }) {
  const [angles, setAngles] = useState(1);
  const [category, setCategory] = useState(categories[0]);
  const [projectType, setProjectType] = useState();
  const methods = useForm({
    mode: "onSubmit",
    defaultValues: { VisualizationObject: "Продукт" },
  });
  const onSubmit = async (data) => {
    try {
      const sendData = {
        ...data,
        ProjectAngles: angles,
        categories: category,
        ProjectType: projectType?.attributes?.name || "",
      };
      console.log(sendData);
      await sendBrief(sendData);
      console.log("Brief sent successfully!");
    } catch (error) {
      console.error("Brief sending error:", error);
    }
  };
  const onCategoryChange = (category) => {
    setCategory(category);
    setProjectType(undefined);
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
      <TagsBrief
        title="Выберите услугу"
        categories={categories}
        setCategory={onCategoryChange}
        category={category}
      />
      <TagsBriefDirection
        title="Направление"
        direction={projectType}
        setDirection={setProjectType}
        category={category}
      />
      <FormProvider {...methods}>
        <form
          className="pb-15 pr-18
          lg:w-4/6"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <ProjectForm title="Подробнее о вашем проекте" visobjs={visobjs}>
            <ProjectAngles angles={angles} setAngles={setAngles} />
          </ProjectForm>
          <ContactBrief />
          <div className="lg:flex flex-row-reverse justify-between items-center">
            <ModalApproveForm name="approve" />
            <ButtonSubmit text="Отправить бриф" variant="blue" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
