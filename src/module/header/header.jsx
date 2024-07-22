import logo from "../../assets/imgs/logo.png";
import { React } from "react";
import "./header.css";

const Header = () => (
  <header>
    <img className="logo-img" src={logo} alt="" />
    <nav>
      <ul>
        <li>
          <a href="#1">Home</a>
        </li>
        <li>
          <a href="#2">Services</a>
        </li>
        <li>
          <a href="#3">Portfolio</a>
        </li>
        <li>
          <a href="#4">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
