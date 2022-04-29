import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const styledNavActive = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      transition: "0.5s",
    };
  };

  //   const styledNav = {
  //     backgroundColor: "cyan",
  //   };
  return (
    <div className="navbar">
      <NavLink to="/" style={styledNavActive}>
        Home
      </NavLink>
      <NavLink to="/about" style={styledNavActive}>
        About
      </NavLink>
    </div>
  );
};
