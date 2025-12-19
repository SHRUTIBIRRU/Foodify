import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { ShoppingCart, X, Menu } from "lucide-react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { loggedInUser } = useContext(UserContext);
  const cart = useSelector((state) => state.cart.item);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-100 shadow-lg">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <img
            className="w-14 md:w-20"
            src="https://cdn-icons-png.flaticon.com/512/3595/3595125.png"
            alt="logo"
          />
          <span className="text-green-500 text-2xl md:text-4xl font-semibold">
            Foodify
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 list-none">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact</Link>
          </li>

          <li>
            <Link to="/cart" className="relative">
              <ShoppingCart color="green" size={32} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>

          <li className="italic">Hello, {loggedInUser}</li>

          <li>
            <button
              className="bg-gray-500 px-3 py-1.5 rounded-lg text-white"
              onClick={() =>
                setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
            >
              {btnName}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-gray-100 px-4 pb-4 space-y-3 list-none">
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>

          <li>
            <Link to="/cart" className="relative">
              <ShoppingCart color="green" size={32} />
              {cart.length > 0 && (
                <span className="absolute top-0 left-5 bg-green-500 text-white text-xs px-2 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>

          <li className="italic">Hello, {loggedInUser}</li>

          <li>
            <button
              className="bg-gray-500 px-3 py-1.5 rounded-lg text-white w-full"
              onClick={() => {
                setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"));
                setIsMenuOpen(false);
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
