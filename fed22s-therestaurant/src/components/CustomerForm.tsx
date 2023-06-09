import { useForm, SubmitHandler } from "react-hook-form";
import { IBooking } from "../models/IBooking";
import { createNewBooking, getAllBookings } from "../services/bookingServices";
import { ChangeEvent, useState } from "react";
import { Wrapper } from "./styled/Wrappers";
interface ICustomerFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}

interface ICustormerFormProps {
  booking: IBooking;
  add: (booking: IBooking) => void;
  showForm: boolean;
}

const CustomerForm = ({ booking, add, showForm }: ICustormerFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICustomerFormInput>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    add({ ...booking, [name]: e.target.value });
  };

  const [disabled, setDisabled] = useState(true);

  const isDisabled = () => {
    setDisabled(!disabled);
  };

  const onSubmit: SubmitHandler<ICustomerFormInput> = () => {
    createNewBooking(booking);
  };
  return (
    <div>
      {showForm ? (
        <Wrapper>
          <div>
            <p>
              <b>Datum:</b> {booking.date.toDateString()}
            </p>
            <p>
              <b>Gäster:</b> {booking.numberOfPeople.toString()}
            </p>
            <p>
              <b>Tid:</b> {booking.sitting === 1 ? "18-21" : "21-23"}
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Förnamn"
              {...register("firstName", { required: true, maxLength: 80 })}
              name="firstName"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Efternamn"
              {...register("lastName", { required: true, maxLength: 100 })}
              name="lastName"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Mailadress"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              name="email"
              onChange={handleChange}
            />
            <input
              type="tel"
              placeholder="Telefonnummer"
              {...register("phoneNumber", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
              name="phoneNumber"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="gdprCheck">
              Jag godkänner hanteringen av mina personuppgifter.
            </label>
            <input type="checkbox" onChange={isDisabled} id="gdprCheck" />
            <input type="submit" disabled={disabled} />
          </form>
        </Wrapper>
      ) : null}
    </div>
  );
};

export default CustomerForm;
