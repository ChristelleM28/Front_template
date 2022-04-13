import React from 'react'
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <><div>NavBar</div>
    <div className="NavBar-container">
      <div className="NavBarLogo">
      <NavLink
        to="/home">
        Logo
      </NavLink>  
      </div>

      <ul className="navbar-menu">
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/page1">Page1</NavLink>
        </li>
        <li>
          <NavLink to="/page2">Page2</NavLink>
        </li>
      </ul>

    </div></>
    </div>
  )
}

export default NavBar
