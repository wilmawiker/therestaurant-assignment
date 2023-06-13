import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { createNewBooking } from "../services/bookingServices";
import { ChangeEvent, useContext, useState } from "react";
import { Wrapper } from "./styled/Wrappers";
import {
  BookingContext,
  BookingDispatchContext,
} from "../contexts/BookingContext";
import { ActionType } from "../reducers/BookingReducer";
import axios from "axios";
import { IBooking } from "../models/IBooking";
import BookingConfirmation from "./BookingConfirmation";
import { createEmail } from "../services/mailServices";
interface ICustomerFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}

interface ICustormerFormProps {
  showForm: boolean;
  showCustomerForm: (showCustomer: boolean) => void;
  showConfirmation: (show: boolean) => void;
}

const CustomerForm = ({
  showForm,
  showCustomerForm,
  showConfirmation,
}: ICustormerFormProps) => {
  const dispatch = useContext(BookingDispatchContext);
  const booking = useContext(BookingContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICustomerFormInput>({
    criteriaMode: "all",
  });

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
              <b>Datum:</b>{" "}
              {new Date(booking.date.toString()).toLocaleDateString()}
            </p>
            <p>
              <b>Gäster:</b> {booking.numberOfPeople.toString()}
              <b>Gäster:</b> {booking.numberOfPeople.toString()}
            </p>
            <p>
              <b>Tid:</b>{" "}
              {booking.sitting.toString() === "1" ? "18-20:30" : "21-23.30"}
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Förnamn"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "Detta fält är obligatoriskt",
                },
                maxLength: {
                  value: 80,
                  message: "Texten överskrider maxgränsen.",
                },
                minLength: {
                  value: 2,
                  message: "Du måste ange minst 2 tecken.",
                },
              })}
              name="firstName"
              onChange={handleChange}
              style={{ fontFamily: "Poppins" }}
            />
            <ErrorMessage
              errors={errors}
              name="firstName"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                  : null;
              }}
            />
            <input
              type="text"
              placeholder="Efternamn"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "Detta fält är obligatoriskt",
                },
                maxLength: {
                  value: 100,
                  message: "Texten överskrider maxgränsen.",
                },
                minLength: {
                  value: 2,
                  message: "Du måste ange minst 2 tecken.",
                },
              })}
              name="lastName"
              onChange={handleChange}
              style={{ fontFamily: "Poppins" }}
            />
            <ErrorMessage
              errors={errors}
              name="lastName"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                  : null;
              }}
            />
            <input
              type="email"
              placeholder="Mailadress"
              {...register("email", {
                required: {
                  value: true,
                  message: "Detta fält är obligatoriskt",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Du måste ange en korrekt mailadress.",
                },
              })}
              name="email"
              onChange={handleChange}
              style={{ fontFamily: "Poppins" }}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                  : null;
              }}
            />
            <input
              type="tel"
              placeholder="Telefonnummer"
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Detta fält är obligatoriskt",
                },
                pattern: {
                  value: /^\d{10}$/,
                  message: "Måste ange ett korrekt telefonnummer.",
                },
                minLength: {
                  value: 10,
                  message: "Måste vara 10 tecken.",
                },
                maxLength: {
                  value: 10,
                  message: "Måste vara 10 tecken.",
                },
              })}
              name="phoneNumber"
              onChange={handleChange}
              style={{ fontFamily: "Poppins" }}
            />
            <ErrorMessage
              errors={errors}
              name="phoneNumber"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                  : null;
              }}
            />
            <br />
            <label htmlFor="gdprCheck">
              Jag godkänner hanteringen av mina personuppgifter.
            </label>
            <input type="checkbox" id="gdprCheck" />
            <input type="submit" />
          </form>
        </Wrapper>
      ) : null}
    </div>
  );
};

export default CustomerForm;