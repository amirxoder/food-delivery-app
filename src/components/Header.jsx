import React from "react";
import { MdShoppingBasket } from "react-icons/md";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";

const Header = () => {
  return (
    <header className="w-screen fixed z-50  p-6 px-16">
      {/* desktop tablet */}
      <div className="hidden md:flex items-center justify-between h-full w-full  ">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </div>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li
              className="text-base text-textColor hover:text-headingColor 
          duration-100 transition-all
          ease-in-out  cursor-pointer"
            >
              Home
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor 
          duration-100 transition-all
          ease-in-out  cursor-pointer"
            >
              Menu
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor 
          duration-100 transition-all
          ease-in-out  cursor-pointer"
            >
              About Us
            </li>
            <li
              className="text-base text-textColor hover:text-headingColor 
          duration-100 transition-all
          ease-in-out  cursor-pointer"
            >
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className="w-5 h-5 absolute -top-2 -right-3 rounded-full flex items-center justify-center bg-cartNumBg">
              <span className="text-xs text-white font-semibold">2</span>
            </div>
          </div>

          <img
            src={Avatar}
            alt="userProfile"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl"
          />
        </div>
      </div>

      {/* moblie */}
      <div className="flex md:hidden h-full w-full  "></div>
    </header>
  );
};

export default Header;
