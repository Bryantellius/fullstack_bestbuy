import * as React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          <NavLink className="nav-link text-light" to="/admin">
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
