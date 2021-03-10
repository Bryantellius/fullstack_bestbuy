import { useHistory, useLocation } from "react-router";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { User, removeAccessTokens } from "../utils/apiService";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  const handleSignOut = () => {
    removeAccessTokens();
    history.push("/");
  };

  React.useEffect(() => {
    if (User.role) {
      console.log("Welcome!");
    }
  }, [location.pathname]);

  if (User.role === "admin") {
    return (
      <nav className="navbar bg-primary">
        <h1>Bestbye</h1>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <span className="nav-link btn-info" onClick={handleSignOut}>
              Sign Out
            </span>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="navbar bg-primary">
        <h1>Bestbye</h1>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="/products">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="/login">
              Log In
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
