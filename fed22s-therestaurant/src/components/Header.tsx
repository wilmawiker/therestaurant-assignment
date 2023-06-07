import { Link } from "react-router-dom"
import { LandingPageButton } from "./styled/Buttons"


export const Header = () => {
    return (
        <nav id="nav">
        <ul>
            <li>
                <Link to="/">Hem</Link>
            </li>
            <li>
                <Link to="/book">
                    <LandingPageButton>Boka Bord</LandingPageButton>
                    </Link>
            </li>
        </ul>
    </nav>
    )
}