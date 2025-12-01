import React from "react";

const Header = () => {
  return (
    <div className="navbar">
      <div className="app-icon-container">
        <img
          className="app-icon"
          src="https://cdn-icons-png.flaticon.com/512/3595/3595125.png"
        />
      </div>
      <div className="navbar-right">
        <div>Home </div>
        <div>About </div>
        <div>Cart </div>
        <button className="login-btn">Login </button>
      </div>
    </div>
  );
};

export default Header;
