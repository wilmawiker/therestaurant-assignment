import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import {
  InfoWrapper,
  ContactWrapper,
  Wrapper,
  GeneralWrapper,
} from "../components/styled/Wrappers";
import { Hr } from "../components/styled/Hr";
import { StyledP } from "../components/styled/StyledP";
import { Button } from "../components/styled/Buttons";

const ContactPage = () => {
  return (
    <>
      <GeneralWrapper flexdirection="row">
        <Wrapper>
          <h3>Kontakta oss</h3>
          <StyledP>
            Observera att vi ej tar emot bokningsförfrågningar via mail eller
            telefon. Vill du boka eller avboka ett bord, vänligen använd vår
            bokningstjänst.
          </StyledP>
          <Link to="/book">
            <Button bgcolor="red" color="white" fontSize="1rem">
              Boka Bord
            </Button>
          </Link>
          <Hr></Hr>
          <ContactWrapper>
            <InfoWrapper>
              <h5>WAIO</h5>
              <p>Vägen 12</p>
              <p>123 45 Sthlm</p>
              <p>Tel. 123-456 78 90</p>
              <p>info@awo.se</p>
            </InfoWrapper>
            <InfoWrapper>
              <h5>Öppettider</h5>
              <p>Måndag - söndag från 17.30</p>
            </InfoWrapper>
          </ContactWrapper>
        </Wrapper>
      </GeneralWrapper>
      <Footer></Footer>
    </>
  );
};

export default ContactPage;
