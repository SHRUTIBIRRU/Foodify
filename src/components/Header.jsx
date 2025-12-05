import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex h-25 justify-between align-baseline bg-gray-100 drop-shadow-lg">
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
        <li className="px-3 cursor-pointer text-lg font-semibold">
          <Link>Cart</Link>
        </li>
        <li className="px-3 cursor-pointer text-lg font-semibold">
          Online Status: {onlineStatus ? "✅" : "❌"}
        </li>
        <li className="px-3 text-lg font-semibold">
          <button
            className="bg-gray-500 cursor-pointer  px-3 py-1.5 rounded-lg text-white"
            onClick={() => {
              setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"));
            }}
          >
            {btnName}
          </button>
        </li>
      </div>
    </div>
  );
};

export default Header;
