import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Main Page</Link>
      </li>
      <li>
        <Link to="/users">Users List Page</Link>
      </li>
    </ul>
  );
};

export default Navbar;
