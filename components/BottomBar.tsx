import React from "react";
import { AiFillHome, AiOutlineHome } from "react-icons/Ai";
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
    <div className="fixed bottom-0 w-full bg-white flex items-center justify-between  md:hidden ">
      <div className="pl-8 text-3xl flex gap-8">
        <Link href="/home">{home ? <AiFillHome /> : <AiOutlineHome />}</Link>
        <Link href="/bookmarks">
          {bookmarks ? <BsBookmarkStarFill /> : <BsBookmarkStar />}
        </Link>
        <Link href="/myArticles">
          {myArticles ? <RiArticleFill /> : <RiArticleLine />}
        </Link>
      </div>
      <div className="w-1 h-8 my-5 bg-gray-300 rounded-sm"></div>
      <div className="text-3xl m-1">
        <Link href="/write">{write ? <FaEdit /> : <FaRegEdit />}</Link>
      </div>
      <div className="text-3xl mr-10 px-6">
        <FaUserCircle />
      </div>
    </div>
  );
};

export default BottomBar;
