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
import { StyledH1 } from "../components/styled/StyledH1";
import { GeneralWrapper } from "../components/styled/Wrappers";

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
      <GeneralWrapper flexdirection="column">
        <StyledH1 fontSize="4rem">WAIO</StyledH1>
        <Link to="/book">
          <LandingPageButton bgcolor="red" color="white">
            Boka Bord
          </LandingPageButton>
        </Link>
      </GeneralWrapper>
    </>
  );
};

export default LandingPage;
