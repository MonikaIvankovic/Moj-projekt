import { NavLink } from "react-router-dom";
import teddybear from "../assets/icons/teddy-bear.png";
const Header = () => {
  return (
    <>
      <div className="header__wrapper">
        <header className="header">
          <div className="header__logo">
            <img src={teddybear} alt="" />
          </div>
          <nav className="header__nav">
            <NavLink className="header__nav__url" to="/">
              Home
            </NavLink>
            <NavLink className="header__nav__url" to="/contact">
              Contact
            </NavLink>
            <NavLink className="header__nav__url" to="/progressbar">
              Progress Bar
            </NavLink>
            <NavLink className="header__nav__url" to="/loaderpage">
              Loader Page
            </NavLink>
            <NavLink className="header__nav__url" to="/selectpage">
              Select Page
            </NavLink>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
