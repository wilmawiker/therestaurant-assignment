import { useForm, SubmitHandler } from "react-hook-form";
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
        dispatch({ type: ActionType.SET_FIRST_NAME, payload: e.target.value });
        break;

      case "lastName":
        dispatch({ type: ActionType.SET_LAST_NAME, payload: e.target.value });
        break;

      case "email":
        dispatch({ type: ActionType.SET_EMAIL, payload: e.target.value });
        break;

      case "phoneNumber":
        dispatch({
          type: ActionType.SET_PHONE_NUMBER,
          payload: e.target.value,
        });
        break;

      default:
        break;
    }
  };

  const [disabled, setDisabled] = useState(true);
  const [occupiedTables, setOccupiedTables] = useState<number[]>([]);

  const isDisabled = () => {
    setDisabled(!disabled);
  };

  const checkIfBookingPossible = async () => {
    const { sitting, date, numberOfPeople } = booking;

    try {
      const bookingDate = new Date(date);

      const url = `http://localhost:4000/api/v1/bookings/date/${bookingDate
        .toISOString()
        .slice(0, 10)}?sitting=${sitting}`;
      let existingBookings: IBooking[] = [];

      try {
        const response = await axios.get<any>(url);
        existingBookings = response.data.data;

        const newOccupiedTables: number[] = [];

        for (const booking of existingBookings) {
          if (Array.isArray(booking.table)) {
            newOccupiedTables.push(...booking.table);
          } else {
            newOccupiedTables.push(booking.table);
          }
        }

        setOccupiedTables(newOccupiedTables);
        console.log(newOccupiedTables);
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          console.log(
            "No existing bookings found for the selected sitting and date."
          );
        } else {
          throw error;
        }
      }

      const tablesPerSitting = 15;
      const tableSize = 6;
      const tablesNeeded = Math.ceil(numberOfPeople / tableSize);

      if (occupiedTables.length + tablesNeeded > tablesPerSitting) {
        console.log("No available tables for the selected sitting and date.");
        return;
      }

      let availableTables: number[] = [];
      let remainingTablesNeeded = tablesNeeded;
      let currentTableNumber = 1;

      while (
        remainingTablesNeeded > 0 &&
        currentTableNumber <= tablesPerSitting
      ) {
        if (
          occupiedTables.includes(currentTableNumber) ||
          currentTableNumber + tablesNeeded - 1 > tablesPerSitting
        ) {
          currentTableNumber++;
          continue;
        }

        let isAvailable = true;
        for (
          let i = currentTableNumber;
          i < currentTableNumber + tablesNeeded;
          i++
        ) {
          if (occupiedTables.includes(i)) {
            isAvailable = false;
            break;
          }
        }

        if (isAvailable) {
          availableTables = Array.from(
            { length: tablesNeeded },
            (_, index) => currentTableNumber + index
          );
          break;
        }

        currentTableNumber++;
      }

      if (availableTables.length === 0) {
        console.log("No available tables for the selected sitting and date.");
        return;
      }

      const newBooking: IBooking = {
        table: availableTables,
        numberOfPeople: booking.numberOfPeople,
        sitting: booking.sitting,
        date: new Date(booking.date.toString()),
        firstName: booking.firstName,
        lastName: booking.lastName,
        email: booking.email,
        phoneNumber: booking.phoneNumber,
        _id: "",
      };

      existingBookings.push(newBooking);

      const newOccupiedTables: number[] = [];
      for (const booking of existingBookings) {
        if (Array.isArray(booking.table)) {
          newOccupiedTables.push(...booking.table);
        } else {
          newOccupiedTables.push(booking.table);
        }
      }
      setOccupiedTables(newOccupiedTables);
      console.log(newOccupiedTables);

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
            <input type="checkbox" onChange={isDisabled} id="gdprCheck" />
            <input type="submit" disabled={disabled} />
          </form>
        </Wrapper>
      ) : null}
    </div>
  );
};

export default CustomerForm;
