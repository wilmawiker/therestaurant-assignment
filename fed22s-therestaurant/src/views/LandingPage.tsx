import { useEffect } from "react";
import {
  createNewBooking,
  deleteBookingById,
  getAllBookings,
  getBookingById,
  updateBookingById,
} from "../services/bookingServices";

const LandingPage = () => {
  useEffect(() => {
    getAllBookings();
    //getBookingById();
    //createNewBooking();
    //deleteBookingById();
    //updateBookingById();
  }, []);

  return <h1>Startsida</h1>;
};

export default LandingPage;
