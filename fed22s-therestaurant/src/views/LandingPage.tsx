import { useEffect } from "react";
import { getAllBookings } from "../services/getBookings";

import { Link } from "react-router-dom";
import { LandingPageButton } from "../components/styled/Buttons";

const LandingPage = () => {
  useEffect(() => {
    getAllBookings();
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
