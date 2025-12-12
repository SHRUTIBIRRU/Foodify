import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const [btnName, setBtnName] = useState("Logout");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cart = useSelector((state) => state.cart.item);

  return (
    <div className="fixed top-0 right-0 left-0">
      <div className="flex h-25 justify-between align-center bg-gray-100 drop-shadow-lg">
        <div className="p-2">
          <img
            className="w-20 pt-1"
            src="https://cdn-icons-png.flaticon.com/512/3595/3595125.png"
          />
        </div>
        <div className="flex justify-evenly list-none p-4 m-4">
          <li className="px-3 cursor-pointer text-lg font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 cursor-pointer text-lg font-semibold">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3 cursor-pointer text-lg font-semibold">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="px-3 cursor-pointer text-lg font-bold">
            <Link to="/cart">
              <span className="relative">
                <ShoppingCart color="blue" size={38} />
                <span className="absolute text-white bottom-5 left-7 bg-blue-500 px-2 py-0.1 rounded-xl">
                  {cart.length > 0 && cart.length}
                </span>
              </span>
            </Link>
          </li>
          {/* <li className="px-3 text-lg font-semibold">
          Online Status: {onlineStatus ? "✅" : "❌"}
        </li> */}
          <li className="px-3 font-sans italic text-lg font-semibold">
            Hello, {loggedInUser}
          </li>
          <li className="px-3 text-md font-semibold">
            <button
              className="bg-gray-500 cursor-pointer  px-2.5 py-1.5 rounded-lg text-white"
              onClick={() => {
                setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"));
              }}
            >
              {btnName}
            </button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;
