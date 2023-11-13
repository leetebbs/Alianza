import React from "react";
import "./Navbar.css";
import Logo from "../../assets/Allianz-Logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo-section">
          <img className="logo" src={Logo} alt="logo" />
          <p>ALIANZA CHANGE YOUR CITY</p>
        </div>
        <ul>
          <li>Home</li>
          <li>How it Works</li>
          <li>Public Works</li>
          <li>Tools</li>
          <li>Transparency</li>
          <li>Incentives</li>
          <li>Login/Signup</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
