import { Link } from "react-router-dom";
import { Nav } from "./styled/Nav";
import { Ul } from "./styled/Ul";
import { Li } from "./styled/Li";
import { LandingPageButton } from "./styled/Buttons"

export const Header = () => {
  return (
    <Nav>
      <h1>AWO</h1>
      <Ul>
        <Li>
          <Link to="/">Hem</Link>
        </Li>
          <li>
                <Link to="/admin">Admin</Link>
            </li>
        <Li>
          <Link to="/book">
                    <LandingPageButton>Boka Bord</LandingPageButton>
          </Link>
        </Li>
        <Li>
          <Link to="/contact">Kontakt</Link>
        </Li>
      </Ul>
    </Nav>
  );
};