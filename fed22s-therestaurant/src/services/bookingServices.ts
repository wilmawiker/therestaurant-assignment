import axios from "axios";
import { IBooking } from "../models/IBooking";
import IBookingResponse, {
  IBookingResponseOne,
} from "../utils/IBookingResponse";

export async function getAllBookings(): Promise<IBooking[]> {
  let response = await axios.get<IBookingResponse>(
    "http://localhost:4000/api/v1/bookings"
  );
  console.log(response.data.data);
  return response.data.data;
}

export async function getBookingById(id: string) {
  let response = await axios.get<IBookingResponseOne>(
    `http://localhost:4000/api/v1/bookings/${id}`
  );
  console.log(response.data.data);
  return response.data.data;
}

export async function getBookingsByDate(date: string, sitting: number) {
  const url = `http://localhost:4000/api/v1/bookings/date/${date}?sitting=${sitting}`;
  const response = await axios.get<any>(url);
  const bookings = response.data.data;
  console.log(bookings);
  return bookings;
}

export async function createNewBooking({
  numberOfPeople,
  actualNumberOfGuests, // Add the new field
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
      actualNumberOfGuests: actualNumberOfGuests, // Include the new field
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

export async function updateBookingById(id: string) {
  let response = await axios.put<IBooking>(
    `http://localhost:4000/api/v1/bookings/${id}`,
    {
      sitting: 1,
    }
  );
  console.log(response.data);
  console.log("Booking updated");

  return response.data;
}
