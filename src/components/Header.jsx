import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("UseEffect  be called");
  }, []);
  return (
    <div className="navbar">
      <div className="app-icon-container">
        <img
          className="app-icon"
          src="https://cdn-icons-png.flaticon.com/512/3595/3595125.png"
        />
      </div>
      <div className="navbar-right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link>Cart</Link>
        </li>
        <button
          onClick={() => {
            setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"));
          }}
          className="login-btn"
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
