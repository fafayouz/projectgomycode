import { React, useState } from "react";
import "./NavbarMobile.css";
import Logo from "./pnglogo.png";
import { NavLink } from "react-router-dom";
import {Link} from 'react-scroll'
const NavbarMobile = () => {
  const [burgerShow, setBurgerShow] = useState(true);
  const burger = () => {
    setBurgerShow(false);
  };
  const burgerHide = () => {
    setBurgerShow(true);
  };

  return (
    <>
      <nav className="NavbarMobile">
        <div className="Logo-NavbarMobile">
          <img src={Logo} alt="tbanyouz" />
        </div>
        {burgerShow ? (
          <>
            <div onClick={burger} className="Burger-Menu">
              <div className="bar--"></div>
              <div className="bar--"></div>
              <div className="bar--"></div>
            </div>
          </>
        ) : (
          <>
            <div onClick={burgerHide} className="Burger-Menu-X">
              <div className="bar---"></div>
              <div className="bar"></div>
              <div className="bar-"></div>
            </div>
          </>
        )}
      </nav>
      {!burgerShow ? (
        <>
          <div className="Nav-Mobile">
            <ul>
              <li>
                {" "}
                <NavLink to="">
                  الرئيسية
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <Link smooth={true} duration={500} activeClassName="selected" to="/Services--id">
                  خدماتنا
                </Link>{" "}
              </li>

              <li>
                {" "}
                <NavLink activeClassName="selected-mobile" to="/التدوينات">
                  التدوينات
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <Link smooth={true} duration={500} activeClassName="selected" to="/About--id">
                  من نحن
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link smooth={true} duration={500} activeClassName="selected" to="/Contact--id">
                  إتصل بنا
                </Link>{" "}
              </li>
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavbarMobile;
