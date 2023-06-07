import { useEffect } from "react";
import {
  createNewBooking,
  deleteBookingById,
  getAllBookings,
  getBookingById,
  updateBookingById,
} from "../services/bookingServices";

import { Link } from "react-router-dom";
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

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
        <Header></Header>
        <div>
        <Link to="/book">
        <button>Boka Bord</button>
        </Link>
       </div>
       <Footer></Footer>  
        </>
    )
}

export default LandingPage;
