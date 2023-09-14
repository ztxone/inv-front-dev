import TagsBrief from "./TagsBrief";
// import ProjectForm from "./ProjectForm";
// import ContactBrief from "./ContactBrief";
// import ButtonSubmit from "../ui/ButtonSubmit";
// import { useForm, FormProvider } from "react-hook-form";
// import sendBrief from "lib/sendBrief";
import Link from "next/link";
// import ModalApproveForm from "../Forms/ModalApproveForm";
import { useState } from "react";
// import { ProjectAngles } from "./ProjectAngles";
import TagsBriefDirection from "./TagsBriefDirection";
import { AggregateForm } from "./Forms/AggregateForm";
// import { InteriorForm } from "./Forms/AggregateForm";

const visobjs = [
  {
    id: 2,
    attributes: {
      Title: "Продукт",
      createdAt: "2023-07-31T13:36:30.559Z",
      updatedAt: "2023-07-31T13:36:33.171Z",
      locale: "ru",
      localizations: {
        data: [],
      },
    },
  },
  {
    id: 3,
    attributes: {
      Title: "Коммерческая недвижимость",
      createdAt: "2023-07-31T13:38:15.409Z",
      updatedAt: "2023-07-31T13:38:16.312Z",
      locale: "ru",
      localizations: {
        data: [],
      },
    },
  },
  {
    id: 4,
    attributes: {
      Title: "Ландшафт",
      createdAt: "2023-07-31T13:38:44.312Z",
      updatedAt: "2023-07-31T13:38:45.241Z",
      locale: "ru",
      localizations: {
        data: [],
      },
    },
  },
];

const categories = [
  {
    id: 7,
    attributes: {
      name: "Архитектурная визуализация",
      slug: "visual_ru",
    },
  },
  {
    id: 8,
    attributes: {
      name: "Продуктовая 3D визуализация",
      slug: "product-3d-vizual_ru",
    },
  },
  {
    id: 9,
    attributes: {
      name: "Моушн & Видеопродакшн",
      slug: "motion_video_ru",
    },
  },
  {
    id: 25,
    attributes: {
      name: "3D моделирование",
      slug: "modeling_ru",
    },
  },
];
// export default function FormBrief({ visobjs, categories }) {
export default function FormBrief() {
  const [category, setCategory] = useState(categories[0]);
  const [projectType, setProjectType] = useState();
  const send = async (data) => {
    try {
      const sendData = {
        ...data,
        // ProjectAngles: angles,
        categories: category,
        ProjectType: projectType?.attributes?.name || "",
      };
      console.log(sendData);
      // await sendBrief(sendData);
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
      <AggregateForm
        send={send}
        projectType={projectType}
        category={category}
      />
    </div>
  );
}
