import React from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/Bs";
import { RiArticleFill, RiArticleLine } from "react-icons/Ri";
import { FaEdit, FaRegEdit, FaUserCircle } from "react-icons/Fa";
import { useRouter } from "next/router";
import Link from "next/link";

const BottomBar = ({ from }: { from: any }) => {
  const router = useRouter();
  const home = router.pathname === "/home";
  const bookmarks = router.pathname === "/bookmarks";
  const write = router.pathname === "/write";
  const myArticles = router.pathname === "/myArticles";

  return (
    <div className="sticky w-full bg-white flex items-center justify-between  md:hidden ">
      <div className="pl-8 text-3xl flex gap-8">
        <Link href="/home">
          <div className="cursor-pointer">
            {home ? <AiFillHome /> : <AiOutlineHome />}
          </div>
        </Link>
        <Link href="/bookmarks">
          <div className="cursor-pointer">
            {bookmarks ? <BsBookmarkStarFill /> : <BsBookmarkStar />}
          </div>
        </Link>
        <Link href="/myArticles">
          <div className="cursor-pointer">
            {myArticles ? <RiArticleFill /> : <RiArticleLine />}
          </div>
        </Link>
      </div>
      <div className="w-1 h-8 my-5 bg-gray-300 rounded-sm"></div>
      <div className="text-3xl m-1">
        <Link href="/write">
          <div className="cursor-pointer">
            {write ? <FaEdit /> : <FaRegEdit />}
          </div>
        </Link>
      </div>
      <div className="text-3xl mr-10 px-6">
        <FaUserCircle />
      </div>
    </div>
  );
};

export default BottomBar;
