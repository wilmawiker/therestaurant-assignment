import { useForm, SubmitHandler } from "react-hook-form";
import { createNewBooking, getAllBookings } from "../services/bookingServices";
import { ChangeEvent, useContext, useState } from "react";
import { Wrapper } from "./styled/Wrappers";
import {
  BookingContext,
  BookingDispatchContext,
} from "../contexts/BookingContext";
import { ActionType } from "../reducers/BookingReducer";
import { StyledP } from "./styled/StyledP";

interface ICustomerFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}

interface ICustormerFormProps {
  showForm: boolean;
}

const CustomerForm = ({ showForm }: ICustormerFormProps) => {
  const dispatch = useContext(BookingDispatchContext);
  const booking = useContext(BookingContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICustomerFormInput>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    switch (name) {
      case "firstName":
        dispatch({ type: ActionType.FIRSTNAME, payload: e.target.value });
        break;

      case "lastName":
        dispatch({ type: ActionType.LASTNAME, payload: e.target.value });
        break;

      case "email":
        dispatch({ type: ActionType.EMAIL, payload: e.target.value });
        break;

      case "phoneNumber":
        dispatch({ type: ActionType.PHONENUMBER, payload: e.target.value });
        break;

      default:
        break;
    }
  };

  const [disabled, setDisabled] = useState(true);

  const isDisabled = () => {
    setDisabled(!disabled);
  };

  const onSubmit: SubmitHandler<ICustomerFormInput> = () => {
    console.log(booking);
    createNewBooking(booking);
  };
  return (
    <div>
      {showForm ? (
        <Wrapper>
          <div>
            <p>
              <b>
                <StyledP>Datum:</StyledP>
              </b>{" "}
              <StyledP>
                {new Date(booking.date.toString()).toLocaleDateString()}
              </StyledP>
            </p>
            <p>
              <b>
                <StyledP>Gäster:</StyledP>
              </b>{" "}
              <StyledP>{booking.numberOfPeople.toString()}</StyledP>
            </p>
            <p>
              <b>
                <StyledP>Tid:</StyledP>
              </b>
              <StyledP>
                {" "}
                {booking.sitting == 1 ? "18-20:30" : "21-23.30"}
              </StyledP>
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Förnamn"
              {...register("firstName", { required: true, maxLength: 80 })}
              name="firstName"
              onChange={handleChange}
              style={{ fontFamily: "Poppins" }}
            />
            <input
              type="text"
              placeholder="Efternamn"
              {...register("lastName", { required: true, maxLength: 100 })}
              name="lastName"
              onChange={handleChange}
              style={{ fontFamily: "Poppins" }}
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
              style={{ fontFamily: "Poppins" }}
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
              style={{ fontFamily: "Poppins" }}
            />
            <br />
            <label htmlFor="gdprCheck">
              <StyledP>
                Jag godkänner hanteringen av mina personuppgifter.
              </StyledP>
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
