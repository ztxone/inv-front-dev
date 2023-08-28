import ModalLabel from "../ui/ModalLabel";
import ModalFieldset from "../ui/ModalFieldset";
import { useFormContext } from "react-hook-form";
import { ProjectAngles } from "./ProjectAngles";
import ModalInputForBrief from "../ui/ModalInputForBrief";
import ModalSelectForBrief from "./ModalSelectForBrief";

export default function ProjectForm({ title, visobjs, children}) {
  const { register, formState:{errors} } = useFormContext();
  return (
    <div
      className="pt-10.5
    md:pt-20 md:flex flex-wrap md:justify-between"
    >
      <h2
        className="mb-7 text-xl
      md:w-full
      lg:text-3.8xl"
      >
        {title}
      </h2>
      <ModalFieldset>
        <ModalLabel
          htmlFor="ProjectName"
          text="Название проекта"
          required={true}
        />
        <ModalInputForBrief
          type="text"
          id="ProjectName"
          placeholder="Введите название вашего проекта"
          error={errors.ProjectName&&<span>This field is required</span>}
          register={register}
          name={"ProjectName"}
          pattern={{required:true}}
        />
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel
          htmlFor="object"
          text="Объект визуализации"
          required={true}

        />
        {visobjs&&<ModalSelectForBrief
          name={'VisualizationObject'}
          options={visobjs}
        />}
      </ModalFieldset>
      <ModalFieldset order="order-6">
        <ModalLabel
          htmlFor="object"
          text="Общее количество необходимых ракурсов"
          required={true}
        />
        {children}
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel htmlFor="project" text="Сроки проекта" required={true} />
        <ModalInputForBrief
          type="number"
          id="project"
          placeholder="Введите сроки вашего проекта"
          error={errors.Duration&&<span>This field is required</span>}
          name='ProjectDates'
          register={register}
          pattern={{required:true}}
        />
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel
          htmlFor="square"
          text="Площадь помещений визуализации"
          required={true}
        />
        <ModalInputForBrief
          type="number"
          id="square"
          placeholder="Введите площадь"
          error={errors.Square&&<span>This field is required</span>}
          name='ProjectSquare'
          register={register}
          pattern={{required:true}}
        />
      </ModalFieldset>
    </div>
  );
}
