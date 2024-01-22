import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/darkchocolate">
        Dark Chocolate
      </Link>
      <Link to="/whitechocolate">
        White Chocolate
      </Link>
      <Link to="/milkchocolate">
        Milk Chocolate
      </Link>
    </nav>
  );
}

export default NavBar;
