import { useEffect } from "react";
import {
  createNewBooking,
  deleteBookingById,
  getAllBookings,
  getBookingById,
  updateBookingById,
} from "../services/bookingServices";

import { Link } from "react-router-dom";
import { LandingPageButton } from "../components/styled/Buttons";

const LandingPage = () => {
  useEffect(() => {
    getAllBookings();
    //getBookingById();
    //createNewBooking();
    //deleteBookingById();
    //updateBookingById();
  }, []);

  return (
    <>
      <div>
        <Link to="/book">
          <LandingPageButton>Boka Bord</LandingPageButton>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
