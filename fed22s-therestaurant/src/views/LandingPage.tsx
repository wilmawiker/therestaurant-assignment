import { useEffect } from "react";
import {
  createNewBooking,
  deleteBookingById,
  getAllBookings,
  getBookingById,
  updateBookingById,
} from "../services/bookingServices";

import { Link } from "react-router-dom";
import { Button, LandingPageButton } from "../components/styled/Buttons";
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
          <Button bgcolor="red" color="white" fontSize="1.3rem">
            Boka Bord
          </Button>
        </Link>
      </GeneralWrapper>
    </>
  );
};

export default LandingPage;
