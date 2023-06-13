import { useForm, SubmitHandler } from "react-hook-form";
import { createNewBooking } from "../services/bookingServices";
import { ChangeEvent, useContext } from "react";
import { Wrapper } from "./styled/Wrappers";
import {
  BookingContext,
  BookingDispatchContext,
} from "../contexts/BookingContext";
import { ActionType } from "../reducers/BookingReducer";
import axios from "axios";
import { IBooking } from "../models/IBooking";

interface ICustomerFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
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
        dispatch({
          type: ActionType.PHONENUMBER,
          payload: e.target.value,
        });
        break;

      default:
        break;
    }
  };

  const checkIfBookingPossible = async () => {
    const { sitting, date, numberOfPeople } = booking;
    
    try {
      let bookingDate = new Date(date);
    
      bookingDate.setDate(bookingDate.getDate() + 1);
    
      const url = `http://localhost:4000/api/v1/bookings/date/${bookingDate.toISOString().slice(0, 10)}?sitting=${sitting}`;
    
      let existingBookings: IBooking[] = [];
    
      try {
        const response = await axios.get<any>(url);
        existingBookings = response.data.data;
        console.log("Filtered Bookings:", existingBookings);
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          console.log("No existing bookings found for the selected date.");
        } else {
          throw error;
        }
      }
    
      // Calculate the total number of people already booked for the selected sitting and date
      const totalPeopleForSittingAndDate = existingBookings.reduce(
        (total, booking) => total + booking.numberOfPeople,
        0
      );
      
      console.log(totalPeopleForSittingAndDate);
  
      // Calculate the remaining available seats in the sitting
      const remainingSeats = 90 - totalPeopleForSittingAndDate;
  
      // Calculate the number of tables needed based on the number of guests and the table capacity
      const tablesNeeded = Math.ceil(numberOfPeople / 6);
  
      // Calculate the total number of seats needed based on the number of tables needed
      const seatsNeeded = tablesNeeded * 6;
    
      if (seatsNeeded > remainingSeats) {
        console.log(
          `The booking exceeds the available seats. Maximum capacity for the sitting is ${remainingSeats}.`
        );
        return;
      }
    
      const newBooking: IBooking = {
        table: [],
        numberOfPeople: seatsNeeded,
        actualNumberOfGuests: numberOfPeople, // Use the original number of guests as the actual number
        sitting,
        date: bookingDate,
        firstName: booking.firstName,
        lastName: booking.lastName,
        email: booking.email,
        phoneNumber: booking.phoneNumber,
        _id: "",
      };
    
      existingBookings.push(newBooking);
      console.log(existingBookings);
    
      await createNewBooking(newBooking);
    } catch (error) {
      console.log("Error checking availability:", error);
    }
  };
  
   

  const onSubmit: SubmitHandler<ICustomerFormInput> = async (data) => {
    const { firstName, lastName, email, phoneNumber } = data;
  
    dispatch({ type: ActionType.FIRSTNAME, payload: firstName });
    dispatch({ type: ActionType.LASTNAME, payload: lastName });
    dispatch({ type: ActionType.EMAIL, payload: email });
    dispatch({ type: ActionType.PHONENUMBER, payload: phoneNumber });
  
    await checkIfBookingPossible();
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
