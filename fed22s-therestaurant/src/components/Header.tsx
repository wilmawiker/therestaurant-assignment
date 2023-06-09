import { Link } from "react-router-dom";
import { Nav } from "./styled/Nav";
import { Ul } from "./styled/Ul";
import { Li } from "./styled/Li";
import { LandingPageButton } from "./styled/Buttons";

export const Header = () => {
  return (
    <Nav>
      <h1>AWO</h1>
      <Ul>
        <Li>
          <Link to="/">Hem</Link>
        </Li>
        <Li>
          <Link to="/admin">Admin</Link>
        </Li>
        <Li>
          <Link to="/contact">Kontakt</Link>
        </Li>
        <Li>
          <Link to="/book">
            <LandingPageButton bgcolor="red" color="white">
              Boka Bord
            </LandingPageButton>
          </Link>
        </Li>
      </Ul>
    </Nav>
  );
};
