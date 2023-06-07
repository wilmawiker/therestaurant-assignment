import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const ContactPage = () => {
  return (
    <>
      <Header></Header>
      <div>
        <h3>Kontakta oss</h3>
        <p>
          Observera att vi ej tar emot bokningsförfrågningar via mail eller
          telefon. Vill du boka eller avboka ett bord, vänligen använd vår
          bokningstjänst.
        </p>
        <Link to="/book">
          <button>Boka Bord</button>
        </Link>
      </div>
      <div>
        <h5>AWO</h5>
        <p>Vägen 12</p>
        <p>123 45 Sthlm</p>
        <p>Tel. 123-456 78 90</p>
        <p>info@awo.se</p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ContactPage;
