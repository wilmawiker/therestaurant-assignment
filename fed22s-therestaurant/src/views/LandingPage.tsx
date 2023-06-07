import { useEffect } from "react";
import { getAllBookings } from "../services/getBookings";

const LandingPage = () => {
  useEffect(() => {
    getAllBookings();
  }, []);

  return <h1>Startsida</h1>;
};

export default LandingPage;
