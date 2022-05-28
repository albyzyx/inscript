import React from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/Ai";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/Bs";
import { RiArticleFill, RiArticleLine } from "react-icons/Ri";
import { FaEdit, FaRegEdit, FaUserCircle } from "react-icons/Fa";

const BottomBar = ({ from }: { from: any }) => {
  return (
    <div className="flex items-center justify-between border-r-4 md:hidden">
      <div className="text-3xl flex  gap-5 ">
        {from === "home" ? <AiFillHome /> : <AiOutlineHome />}
        {from === "bookmark" ? <BsBookmarkStarFill /> : <BsBookmarkStar />}
        {from === "article" ? <RiArticleFill /> : <RiArticleLine />}
      </div>
      <div className="w-1 h-8 my-5 bg-gray-300 rounded-sm"></div>
      <div className="text-3xl m-1">
        {from === "write" ? <FaEdit /> : <FaRegEdit />}
      </div>
      <div className="text-3xl mr-10 px-6">
        <FaUserCircle />
      </div>
    </div>
  );
};

export default BottomBar;
