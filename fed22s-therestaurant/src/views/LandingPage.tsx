import { Link } from "react-router-dom";
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

const LandingPage = () => {
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