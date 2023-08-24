import ModalInput from "../ui/ModalInput";
import ModalLabel from "../ui/ModalLabel";
import ModalFieldset from "../ui/ModalFieldset";
import ModalSelect from "../ui/ModalSelect";
import { useFormContext } from "react-hook-form";
import { ProjectAngles } from "./ProjectAngles";

export default function ProjectForm({ title, visobjs}) {
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
        <ModalInput
          type="text"
          id="ProjectName"
          placeholder="Введите название вашего проекта"
          error={errors.ProjectName&&<span>This field is required</span>}
          register={register}
          name={"ProjectName"}
          required={true}
        />
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel
          htmlFor="object"
          text="Объект визуализации"
          required={true}

        />
        {visobjs&&<ModalSelect 

          options={visobjs}
        />}
      </ModalFieldset>
      <ModalFieldset order="order-6">
        <ModalLabel
          htmlFor="object"
          text="Общее количество необходимых ракурсов"
          required={true}
        />
        <ProjectAngles />
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel htmlFor="project" text="Сроки проекта" required={true} />
        <ModalInput
          type="number"
          id="project"
          placeholder="Введите сроки вашего проекта"
          error={errors.Duration&&<span>This field is required</span>}
          name='Duration'
          register={register}
          required={true}
        />
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel
          htmlFor="square"
          text="Площадь помещений визуализации"
          required={true}
        />
        <ModalInput
          type="number"
          id="square"
          placeholder="Введите площадь"
          error={errors.Square&&<span>This field is required</span>}
          name='Square'
          register={register}
          required={true}
        />
      </ModalFieldset>
    </div>
  );
}
