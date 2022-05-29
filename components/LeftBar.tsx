import React from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { RiArticleFill, RiArticleLine } from "react-icons/ri";
import { FaEdit, FaRegEdit, FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import ReactTooltip from "react-tooltip";

const Navbar = ({ from }: { from: String }) => {
  return (
    <div className="md:flex flex-col items-center justify-between border-r-4 hidden">
      <div></div>
      <div className="p-6">
        <div className="text-3xl flex flex-col gap-5 ">
          <Link href="/home">
            <div className="cursor-pointer" data-tip="home">
              {from === "home" ? <AiFillHome /> : <AiOutlineHome />}
            </div>
          </Link>
          <Link href="/bookmarks">
            <div className="cursor-pointer" data-tip="bookmarks">
              {from === "bookmarks" ? (
                <BsBookmarkStarFill />
              ) : (
                <BsBookmarkStar />
              )}
            </div>
          </Link>
          <Link href="/myArticles">
            <div className="cursor-pointer" data-tip="my articles">
              {from === "myArticles" ? <RiArticleFill /> : <RiArticleLine />}
            </div>
          </Link>
        </div>
        <div className="w-8 h-1 my-5 bg-gray-300 rounded-sm"></div>
        <div className="text-3xl m-1">
          <Link href="/write">
            <div className="cursor-pointer" data-tip="create blog">
              {from === "write" ? <FaEdit /> : <FaRegEdit />}
            </div>
          </Link>
        </div>
      </div>

      <div className="text-3xl mb-10 px-6" data-tip="0.68 ATX">
        <FaUserCircle />
      </div>
      <ReactTooltip />
    </div>
  );
};

export default Navbar;
