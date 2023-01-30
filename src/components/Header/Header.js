import React from "react";
import "./Header.css";
import logoImg from "../../images/campingonLogo.jpg";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  let [Nav, Navset] = useState(false);
  return (
    <div className="header">
      <div className="headerLogo">
        <Link to="/">
          <img src={logoImg} alt="캠핑온로고"></img>
        </Link>
      </div>
      <div className="headerNavigation">
        <Link to="/MyPage">
          <div className="MyPageButton">MY</div>
        </Link>
        <div className="MenuButton">
          <nav
            onClick={() => {
              Navset(!Nav);
            }}
          >
            ☰
          </nav>
        </div>
      </div>
      {Nav == true ? <NavMenu></NavMenu> : null}
    </div>
  );
};
function NavMenu() {
  return (
    <ul className="navigationBar">
      <Link to="/">
        <li>캠핑</li>
      </Link>
      <Link to="/">
        <li>캠핑</li>
      </Link>
      <Link to="/">
        <li>캠핑</li>
      </Link>
      <Link to="/">
        <li>캠핑</li>
      </Link>
    </ul>
  );
}
export default Header;
