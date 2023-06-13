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

export async function getBookingsByDate(date: string, sitting: number) {
  const url = `http://localhost:4000/api/v1/bookings/date/${date}?sitting=${sitting}`;
  const response = await axios.get<any>(url);
  const bookings = response.data.data;
  console.log(bookings);
  return bookings;
}

export async function createNewBooking(booking: IBooking) {
  try {
    const response = await axios.post<IBooking>(
      "http://localhost:4000/api/v1/bookings",
      booking
    );
    console.log(response.data);
    console.log("Booking added");
    return response.data;
  } catch (error) {
    console.log("Error creating new booking:", error);
    throw error;
  }
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
