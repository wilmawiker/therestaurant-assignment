import { Link } from "react-router-dom";
import { Nav } from "./styled/Nav";
import { Ul } from "./styled/Ul";
import { Li } from "./styled/Li";

export const Header = () => {
  return (
    <Nav>
      <h1>AWO</h1>
      <Ul>
        <Li>
          <Link to="/">Hem</Link>
        </Li>
        <Li>
          <Link to="/book">Boka Bord</Link>
        </Li>
        <Li>
          <Link to="/contact">Kontakt</Link>
        </Li>
      </Ul>
    </Nav>
  );
};
