import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
      <li>
        <NavLink to="/darkchocolate">
          Dark Chocolate
        </NavLink>
      </li>
      <li>
        <NavLink to="/whitechocolate">
          White Chocolate
        </NavLink>
      </li>
      <li>
        <NavLink to="/milkchocolate">
          Milk Chocolate
        </NavLink>
      </li>
      </ul>
    </nav>
  );
}

export default NavBar;
