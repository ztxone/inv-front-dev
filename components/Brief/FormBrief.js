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



export default function FormBrief({ visobjs, categories }) {
  const [checked, setChecked] = useState(true)
  const [angles, setAngles] = useState(1)
  const toggleChecked=()=>setChecked(prev=>!prev)
  const methods = useForm({mode:'onSubmit',defaultValues:{VisualizationObject:'Продукт'}});
  const onSubmit = async (data) => {
    try {
      console.log({...data,ProjectAngles:angles});
      await sendBrief({...data,ProjectAngles:angles});
      console.log("Brief sent successfully!");
    } catch (error) {
      console.error("Brief sending error:", error);
    }
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
          className="pb-15 pr-18
          lg:w-4/6"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <TagsBrief title="Выберите услугу" />
          <TagsBrief title="Направление" />
          <ProjectForm title="Подробнее о вашем проекте" visobjs={visobjs}>
          <ProjectAngles angles={angles} setAngles={setAngles}/>
          </ProjectForm>
          <ContactBrief />
          <div className="lg:flex flex-row-reverse justify-between items-center">
            <ModalApproveForm  checked={checked} setChecked={toggleChecked} />
            <ButtonSubmit text="Отправить бриф" variant="blue" disabled={!checked&&methods.formState.isValid} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
