import ModalInput from "../ui/ModalInput";
import ModalLabel from "../ui/ModalLabel";
import ModalFieldset from "../ui/ModalFieldset";
import ModalSelect from "../ui/ModalSelect";
import Counter from "../ui/Counter";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { fetchAPI } from "lib/api";

export default function ProjectForm({ title }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [customValue, setCustomValue] = useState(1);
  const [data, setData] = useState();

  const handleCustomValueChange = (value) => {
    setCustomValue(value);
  };

  const i18n = useTranslation();
  const locale = i18n.lang;

  useEffect(() => {
    async function fetchData() {
      const visobjRes = await fetchAPI("/visualization-objects", {
        locale: locale,
        fields: ["Title"],
      });

      setData(visobjRes.data);
    }
    fetchData();
  }, [locale]);

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
        <input
          className="briefInput"
          type="text"
          id="ProjectName"
          placeholder="Введите название вашего проекта"
          {...register("ProjectName", { required: true })}
        />
        {errors.ProjectName && <span>This field is required</span>}
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel
          htmlFor="object"
          text="Объект визуализации"
          required={true}
        />
        <ModalSelect
          option1="Коммерческая недвижимость"
          option2=""
          option3=""
          option4=""
        />
      </ModalFieldset>
      <ModalFieldset order="order-6">
        <ModalLabel
          htmlFor="object"
          text="Общее количество необходимых ракурсов"
          required={true}
        />
        <Counter
          onValueChange={handleCustomValueChange}
          initialValue={customValue}
        >
          <input
            type="number"
            className="outline-none focus:outline-none text-center bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 w-2/6"
            name="custom-input-number"
            value={customValue}
            readOnly
            {...register("ProjectPlans")}
          />
        </Counter>
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel htmlFor="project" text="Сроки проекта" required={true} />
        <input
          className="briefInput"
          type="number"
          id="project"
          placeholder="Введите сроки вашего проекта"
        />
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel
          htmlFor="square"
          text="Площадь помещений визуализации"
          required={true}
        />
        <input
          className="briefInput"
          type="number"
          id="square"
          placeholder="Введите площадь"
        />
      </ModalFieldset>
    </div>
  );
}
