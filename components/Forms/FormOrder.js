import {useForm} from "react-hook-form";
import sendEmail from "lib/email";
import ButtonClose from '../ui/ButtonClose';

const FormOrder=() => {
  const {
    register,
    handleSubmit,

    formState: {errors},
  }=useForm();

  const onSubmit=async (data) => {
    try {
      await sendEmail(data);
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Email sending error:", error);
    }
  };

  return (
    <>
      <ButtonClose />
      <h2 className="modal-title">Отправить заявку</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", {required: true})}
          />
          {errors.name&&<span>This field is required</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email&&<span>This field is required</span>}
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            {...register("phone", {required: "Phone is required"})}
          />
          {errors.phone&&<span>This field is required</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormOrder;
