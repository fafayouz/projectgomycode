import React from "react";
import './Navbar.css'
import { NavLink  } from "react-router-dom";
import logo from './logo.png';
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink to="">الرئيسية</NavLink>{" "}
          </li>
          <li>
            {" "}
            <Link smooth={true} duration={500} activeClassName="selected" to="/Services--id">خدماتنا</Link>{" "}
          </li>
          
          <li>
            {" "}
            <NavLink activeClassName="selected" to="/التدوينات">
              التدوينات
              </NavLink>{" "}
          </li>
          <li>
            {" "}
            <Link smooth={true} duration={500} activeClassName="selected" to="/About--id">من نحن</Link>{" "}
          </li>
          <li>
            {" "}
            <Link smooth={true} duration={500} activeClassName="selected" to="/Contact--id">إتصل بنا</Link>{" "}
          </li>
        </ul>
        <div className="Logo-Navbar">
          <img src={logo} alt="tban-youz" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
