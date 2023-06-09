import { createContext } from "react";
import { IBooking, defaultBooking } from "../models/IBooking";

const BookingContext = createContext<IBooking>(defaultBooking);

export default BookingContext;
