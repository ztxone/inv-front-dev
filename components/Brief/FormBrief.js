import TagsBrief from "./TagsBrief";
import sendBrief from "lib/sendBrief";
import Link from "next/link";
import { useState } from "react";
import TagsBriefDirection from "./TagsBriefDirection";
import { AggregateForm } from "./Forms/AggregateForm";

export default function FormBrief({ visobjs, categories }) {
  const [category, setCategory] = useState(categories[0]);
  const [projectType, setProjectType] = useState();

  const send = async (data) => {
    try {
      const sendData = {
        ...data,
        categories: category,
        ProjectType: projectType?.attributes?.name,
      };
      await sendBrief(sendData);

      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(sendData),
      });
      console.log(await res.json());
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
