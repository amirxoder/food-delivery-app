import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app, firestore, storage } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "./../context/reducer";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const firebaseAuth = getAuth(app);

  const Provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, Provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });

      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu((prev) => !prev);
    }
  };

  const logout = () => {
    setIsMenu((prev) => !prev);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
    <header className="w-screen fixed z-50 p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop tablet */}
      <div className="hidden md:flex items-center justify-between h-full w-full  ">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
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
          </motion.ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className="w-5 h-5 absolute -top-2 -right-3 rounded-full flex items-center justify-center bg-cartNumBg">
              <span className="text-xs text-white font-semibold">2</span>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.8 }}
              src={user ? user.photoURL : Avatar}
              onClick={login}
              alt="userProfile"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            />
            {isMenu && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.6,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.6,
                }}
                className="absolute 
      right-0 w-40 bg-gray-50 top-12
            drop-shadow-xl rounded-lg  flex flex-col"
              >
                {user && user.email === "amazadbakht@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      onClick={() => setIsMenu((prev) => !prev)}
                      className="border-b px-4 py-2 hover:bg-slate-100 transition-all duration-300 cursor-pointer flex items-center justify-between"
                    >
                      New Item
                      <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  onClick={logout}
                  className="px-4 py-2 hover:bg-slate-100 transition-all duration-300 cursor-pointer flex items-center justify-between"
                >
                  Logout
                  <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* moblie */}
      <div className="flex justify-between items-center md:hidden h-full w-full ">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          <div className="w-5 h-5 absolute -top-2 -right-3 rounded-full flex items-center justify-center bg-cartNumBg">
            <span className="text-xs text-white font-semibold">2</span>
          </div>
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.8 }}
            src={user ? user.photoURL : Avatar}
            onClick={login}
            alt="userProfile"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
          />
          {isMenu && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.6,
              }}
              className="absolute 
      right-0 w-40 bg-gray-50 top-12
            drop-shadow-xl rounded-lg  flex flex-col"
            >
              {user && user.email === "amazadbakht@gmail.com" && (
                <Link to={"/createItem"}>
                  <p
                    onClick={() => setIsMenu((prev) => !prev)}
                    className="border-b px-4 py-2 hover:bg-slate-100 transition-all duration-300 cursor-pointer flex items-center justify-between"
                  >
                    New Item
                    <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex  flex-col  ">
                <li
                  onClick={() => setIsMenu((prev) => !prev)}
                  className="text-base
                  duration-100 transition-all
                  ease-in-out  cursor-pointer px-4 py-2 border-b"
                >
                  Home
                </li>
                <li
                  onClick={() => setIsMenu((prev) => !prev)}
                  className="text-base
                  duration-100 transition-all
                  ease-in-out  cursor-pointer px-4 py-2 border-b"
                >
                  Menu
                </li>
                <li
                  onClick={() => setIsMenu((prev) => !prev)}
                  className="text-base
                  duration-100 transition-all
                  ease-in-out  cursor-pointer px-4 py-2 border-b"
                >
                  About Us
                </li>
                <li
                  onClick={() => setIsMenu((prev) => !prev)}
                  className="text-base
                  duration-100 transition-all
                  ease-in-out  cursor-pointer px-4 py-2 border-b"
                >
                  Service
                </li>
              </ul>
              <p
                onClick={logout}
                className="px-4 py-2 hover:bg-slate-100  transition-all duration-300 cursor-pointer flex items-center justify-center gap-5 bg-slate-200"
              >
                Logout
                <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
