import React from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/Ai";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/Bs";
import { RiArticleFill, RiArticleLine } from "react-icons/Ri";
import { FaEdit, FaRegEdit, FaUserCircle } from "react-icons/Fa";

const Navbar = ({ from }: { from: String }) => {
  return (
    <div className="md:flex flex-col items-center justify-between border-r-4 hidden">
      <div></div>
      <div className="p-6">
        <div className="text-3xl flex flex-col gap-5 ">
          {from === "home" ? <AiFillHome /> : <AiOutlineHome />}
          {from === "bookmark" ? <BsBookmarkStarFill /> : <BsBookmarkStar />}
          {from === "article" ? <RiArticleFill /> : <RiArticleLine />}
        </div>
        <div className="w-8 h-1 my-5 bg-gray-300 rounded-sm"></div>
        <div className="text-3xl m-1">
          {from === "write" ? <FaEdit /> : <FaRegEdit />}
        </div>
      </div>

      <div className="text-3xl mb-10 px-6">
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Navbar;
