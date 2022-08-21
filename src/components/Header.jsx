import React from "react";

const Header = () => {
  return (
    <div className="w-screen fixed z-50 bg-slate-300 p-6 px-16">
      {/* desktop tablet */}
      <div className="hidden md:flex h-full w-full bg-blue-300 p-4  "></div>

      {/* moblie */}
      <div className="flex md:hidden h-full w-full bg-red-300 p-4  "></div>
    </div>
  );
};

export default Header;
