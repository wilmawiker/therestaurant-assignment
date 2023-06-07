import axios from "axios";
import { IBooking } from "../models/IBooking";

export async function getAllBookings() {
  let response = await axios.get<IBooking[]>(
    "http://localhost:4000/api/v1/bookings"
  );
  console.log(response.data);
  return response.data;
}
