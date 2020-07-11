import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
  <div>
    <NavLink to="/">Dashboard</NavLink>
    <NavLink to="/create"> Create Expense</NavLink>
  </div>
);

export default Header;
