import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/"> Home </NavLink>|<NavLink to="/users"> Users </NavLink>
    </nav>
  );
};

export default Nav;
