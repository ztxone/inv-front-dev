import ModalSelectForBrief from "../ModalSelectForBrief";
import ModalInputForBrief from "@/components/ui/ModalInputForBrief";
import ModalFieldset from "@/components/ui/ModalFieldset";
import ModalLabel from "@/components/ui/ModalLabel";
import { useFormContext } from "react-hook-form";

export default function FieldsForForm({ title, children, inputs }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const renderFieldInputs = (fieldInput) => {
    return (
      <ModalFieldset key={fieldInput.label.htmlFor}>
        <ModalLabel
          htmlFor={fieldInput.label.htmlFor}
          text={fieldInput.label.text}
          required={fieldInput.label.required}
        />
        {fieldInput.type === "select" ? (
          <ModalSelectForBrief
            name={fieldInput.input.name}
            options={fieldInput.input.options}
          />
        ) : fieldInput.type === "counter" ? (
          children
        ) : (
          <ModalInputForBrief
            max={fieldInput?.input?.max}
            type={fieldInput.input.type}
            id={fieldInput.input.name}
            placeholder={fieldInput.input.placeholder}
            pattern={{ required: fieldInput.input.pattern }}
            name={fieldInput.input.name}
            error={errors[fieldInput.input.name] && fieldInput.input.error}
            register={register}
          />
        )}
      </ModalFieldset>
    );
  };

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

      {inputs.map(renderFieldInputs)}
    </div>
  );
}
