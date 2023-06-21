import { NavLink } from "react-router-dom";

type HeaderProps = {
  toggleSidebar: () => void;
};
const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <>
      <div className="header__wrapper">
        <header className="header">
          <img src="" alt="" />
          <NavLink className="header__nav__link" to="/">
            Home
          </NavLink>
          <NavLink className="header__nav__link" to="/contact">
            Contact
          </NavLink>
          <NavLink className="header__nav__link" to="/progressbar">
            Progress Bar
          </NavLink>
        </header>
      </div>
    </>
  );
};

export default Header;
