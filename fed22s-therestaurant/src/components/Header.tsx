import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav id="nav">
      <ul>
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/book">Boka Bord</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};
