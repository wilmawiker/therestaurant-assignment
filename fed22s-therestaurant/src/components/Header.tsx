import { Link } from "react-router-dom";
import { Nav } from "./styled/Nav";
import { Ul } from "./styled/Ul";
import { Li } from "./styled/Li";
import { LandingPageButton } from "./styled/Buttons";
import { StyledHeader } from "./styled/Header";
import { StyledH1 } from "./styled/StyledH1";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledH1 fontSize="1.5rem">WAIO</StyledH1>
      <Ul>
        <Li>
          <Link to="/">Hem</Link>
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
    </StyledHeader>
  );
};
