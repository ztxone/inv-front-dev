import TagsBrief from "./TagsBrief";
import sendBrief from "lib/sendBrief";
import Link from "next/link";
import TagsBriefDirection from "./TagsBriefDirection";
import { AggregateForm } from "./Forms/AggregateForm";
import { getCategoryProject } from "lib/getCategoryProject";
import { useContext, useEffect, useState } from "react";
import { ToastrContext } from "../Toastr/ToastrProvider";
import { useEnquiryForm } from "lib/useEnquiryForm";
import { useSearchParams } from 'next/navigation'


export default function FormBrief({ visobjs, categories }) {
  const checkUser = useEnquiryForm();
  const searchParams = useSearchParams()
  const serviceId = searchParams.get('serviceId')
  const [category, setCategory] = useState();
  const [projectType, setProjectType] = useState();
  const [loading, setLoading] = useState(false);

  const { setOpen, setSuccess, setMessage, Confirmation_Form_Brief } =
    useContext(ToastrContext);
  const openSuccessToast = () => {
    setMessage(Confirmation_Form_Brief);
    setSuccess(true);
    setOpen(true);
  };
  const openErrorToast = () => {
    setSuccess(false);
    setOpen(true);
  };

  const send = async (data) => {
    setLoading(true);
    try {
      const sendData = {
        ...data,
        categories: category,
        ProjectType: projectType?.attributes?.name,
      };
      console.log(sendData);
      const isUser = await checkUser();
      if (isUser) {
        await sendBrief(sendData);
        // console.log(sendData);
        openSuccessToast();
      } else {
        openErrorToast();
      }
    } catch (error) {
      openErrorToast();
    } finally {
      setLoading(false);
    }
  };
  const onCategoryChange = (category) => {
    setCategory(category);
    setProjectType(undefined);
  };


  useEffect(() => {
    if (serviceId) {
      const { selectCategory, selectProject } = getCategoryProject(
        serviceId,
        categories
      );
      setCategory(selectCategory);
      setProjectType(selectProject);
    } else {
      setCategory(categories[0]);
    }
  }, [serviceId, categories]);
  return (
    <>
      <div className="container">
        <p
          className="pt-7
      md:text-1xl md:w-2/3 md:leading-7
      xl:w-full"
        >
          Оставьте заявку, либо звоните, мы пообщаемся и сами все за вас
          заполним:
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
          loading={loading}
          send={send}
          projectType={projectType}
          category={category}
        />
      </div>
    </>
  );
}
