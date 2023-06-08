
import { Link } from "react-router-dom"
import { LandingPageButton } from "./styled/Buttons"
import { StyledHeader } from "./styled/Header"


export const Header = () => {
    return (
        <StyledHeader>
        <nav id="nav">
        <ul>
            <li>
                <Link to="/">Hem</Link>
            </li>
            <li>
                <Link to="/admin">Admin</Link>
            </li>
            <li>
                <Link to="/book">
                    <LandingPageButton>Boka Bord</LandingPageButton>
                </Link>
            </li>
            <li>
          <Link to="/contact">Kontakt</Link>
        </li>
        </ul>
    </nav>
    </StyledHeader>
    )
}

