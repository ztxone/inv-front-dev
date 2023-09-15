import React, { useState } from "react";
import ModalSelectForBrief from "../ModalSelectForBrief";
import ModalInputForBrief from "@/components/ui/ModalInputForBrief";
import ModalFieldset from "@/components/ui/ModalFieldset";
import ModalLabel from "@/components/ui/ModalLabel";
import { useFormContext } from "react-hook-form";

export default function InteriorProjectForm({ title, children }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
      {/* <ModalFieldset>
        <ModalLabel
          htmlFor="ProjectName"
          text="Название проекта"
          required={true}
        />
        <ModalInputForBrief
          type="text"
          id="ProjectName"
          placeholder="Введите название вашего проекта"
          error={errors.ProjectName && "This field is required"}
          register={register}
          name={"ProjectName"}
          pattern={{ required: true }}
        />
      </ModalFieldset> */}
      {/* <ModalFieldset>
        <ModalLabel
          htmlFor="object"
          text="Объект визуализации"
          required={true}
        />
        <ModalSelectForBrief
          name={"VisualizationObject"}
          options={selectOptions}
        />
      </ModalFieldset> */}
      {/* <ModalFieldset>
        <ModalLabel htmlFor="3dModel" text="3D модель здания" required={true} />
        <ModalSelectForBrief
          id="3dModel"
          name={"3dModel"}
          options={modelOptions}
        />
      </ModalFieldset> */}
      {/* <ModalFieldset>
        <ModalLabel htmlFor="project" text="Срок сдачи" required={true} />
        <ModalInputForBrief
          type="text"
          id="project"
          placeholder="Введите сроки вашего проекта"
          error={errors.Duration && "This field is required"}
          name="ProjectDates"
          register={register}
          pattern={{ required: true }}
        />
      </ModalFieldset> */}
      {/* <ModalFieldset order="order-6">
        <ModalLabel
          htmlFor="object"
          text="Общее количество необходимых ракурсов"
          required={true}
        />
        {children}
      </ModalFieldset> */}
      {/* <ModalFieldset>
        <ModalLabel
          htmlFor="ClassProperty"
          text="Класс недвижимости"
          required={true}
        />
        <ModalSelectForBrief
          id={"ClassProperty"}
          name={"ClassProperty"}
          options={classOptions}
        />
      </ModalFieldset> */}

      {/* <ModalFieldset>
        <ModalLabel
          htmlFor="mapLink"
          text="Местоположение обьекта"
          required={false}
        />
        <ModalInputForBrief
          type="text"
          id="mapLink"
          placeholder="Введите площадь"
          error=""
          name="mapLink"
          register={register}
          pattern={{ required: false }}
        />
      </ModalFieldset> */}

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
          error={errors.Square && "This field is required"}
          name="ProjectSquare"
          register={register}
          pattern={{ required: true }}
        />
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel
          htmlFor="ProjectResolution"
          text="Необходимое разрешение финальных обьектов"
          required={true}
        />
        <ModalInputForBrief
          type="text"
          id="ProjectResolution"
          placeholder="Введите необходимое разрешение"
          error={errors.Square && "This field is required"}
          name="ProjectResolution"
          register={register}
          pattern={{ required: true }}
        />
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel
          htmlFor="Extra"
          text="Дополнительное описание:"
          required={false}
        />
        <ModalInputForBrief
          type="text"
          id="Extra"
          placeholder="Введите дополнительное описание:"
          error={errors.Square && "This field is required"}
          name="Extra"
          register={register}
          pattern={{ required: false }}
        />
      </ModalFieldset>
    </div>
  );
}
