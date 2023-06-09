import axios from "axios";
import { IBooking } from "../models/IBooking";
import IBookingResponse from "../utils/IBookingResponse";

export async function getAllBookings(): Promise<IBooking[]> {
  let response = await axios.get<IBookingResponse>(
    "http://localhost:4000/api/v1/bookings"
  );
  console.log(response.data.data);
  return response.data.data;
}

export async function getBookingById() {
  let response = await axios.get<IBooking>(
    "http://localhost:4000/api/v1/bookings/:bookingId"
  );
  console.log(response.data);
  return response.data;
}

export async function createNewBooking({
  numberOfPeople,
  sitting,
  firstName,
  lastName,
  email,
  phoneNumber,
  date,
}: IBooking) {
  let response = await axios.post<IBooking>(
    "http://localhost:4000/api/v1/bookings",
    {
      table: [],
      numberOfPeople: numberOfPeople,
      sitting: sitting,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      date: date,
    }
  );
  console.log(response.data);
  console.log("Booking added");
  return response.data;
}

export async function deleteBookingById(id: string) {
  let response = await axios.delete<IBooking>(
    `http://localhost:4000/api/v1/bookings/${id}`
  );
  console.log(response.data);
  console.log("Booking deleted");
  return response.data;
}

export async function updateBookingById() {
  let response = await axios.put<IBooking>(
    "http://localhost:4000/api/v1/bookings/:bookingId",
    {
      sitting: 1,
    }
  );
  console.log(response.data);
  console.log("Booking updated");

  return response.data;
}
