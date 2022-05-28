import React from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/Ai";

const Navbar = ({ from }: { from: String }) => {
  return (
    <div>
      <div className="text-3xl active:text-red-500 ">
        {from === "home" ? <AiFillHome /> : <AiOutlineHome />}
      </div>
    </div>
  );
};

export default Navbar;
