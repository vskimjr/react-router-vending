import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
      <li>
        <Link to="/darkchocolate">
          Dark Chocolate
        </Link>
      </li>
      <li>
        <Link to="/whitechocolate">
          White Chocolate
        </Link>
      </li>
      <li>
        <Link to="/milkchocolate">
          Milk Chocolate
        </Link>
      </li>
      </ul>
    </nav>
  );
}

export default NavBar;
