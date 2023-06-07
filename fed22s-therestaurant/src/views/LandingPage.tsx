import { useEffect } from "react";
import { getAllBookings } from "../services/getBookings";

import { Link } from "react-router-dom";
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { LandingPageButton } from "../components/styled/Buttons";

const LandingPage = () => {
  useEffect(() => {
    getAllBookings();
  }, []);

    return (
        <>
        <Header></Header>
        <div>
        <Link to="/book">
        <LandingPageButton>Boka Bord</LandingPageButton>
        </Link>
       </div>
       <Footer></Footer>  
        </>
    )
}

export default LandingPage;
