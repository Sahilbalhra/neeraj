import React from "react";
import logo from "../images/logo.jpg";
import name from "../images/name.jpg";

const Navbar = () => {
  return (
    <div className="bg-sky-900 container m-auto">
      <div className="flex space-x-6">
        <img src={logo} alt="logo" style={{height: "6vh",width:"50%"}}/>
        <img src={name} alt="name" style={{height: "6vh",width:"50%"}}/>
      </div>
      <span className="m-2 text-white text-xl">Invoice List</span>
    </div>
  );
};

export default Navbar;
