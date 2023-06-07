import { useForm, SubmitHandler } from "react-hook-form";
import { IBooking } from "../models/IBooking";

interface ICustomerFormInput {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
}

interface ICustormerFormProps {
    booking: IBooking;
}

const CustomerForm = ({booking}: ICustormerFormProps) => {
    const { handleSubmit, register, formState: { errors } } = useForm<ICustomerFormInput>();
    const onSubmit: SubmitHandler<ICustomerFormInput> = values => console.log(values);
    let time = "";
    return <>
    <div>
        <p><b>Datum:</b> {booking.date.toDateString()}</p>
        <p><b>Gäster:</b> {booking.numberOfPeople}</p>
        <p><b>Tid:</b> {
            booking.sitting
        }</p>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="First name" {...register("firstName", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("lastName", {required: true, maxLength: 100})} />
        <input type="email"
        {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          })}  
          />
          <input type="tel" placeholder="Mobile number" {...register("phoneNumber", {required: true, minLength: 6, maxLength: 12})} />
          <input type="submit" />
    </form>
    </>
}

export default CustomerForm;