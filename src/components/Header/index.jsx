import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="#689f38 light-green darken-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Recipe
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
