import React, { useEffect, useState } from "react";
import { MdOutlineBookmarkAdd } from "react-icons/Md";
import { IoMdBookmark } from "react-icons/Io";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import { useSelector } from "react-redux";
import { connectWallet, selectAuthState } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const Card = ({ element }: { element: any }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const { address } = useSelector(selectAuthState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!address) dispatch(connectWallet());
  }, []);

  const bookmark = async () => {
    const response = await axios.post(
      "http://localhost:8080/articles/bookmark",
      { address, cid: element.cid }
    );
    if (response.data.success) setBookmarked(true);
  };

  const like = async () => {
    const response = await axios.post("http://localhost:8080/articles/like", {
      address,
      cid: element.cid,
    });
    if (response.data.success) setLiked(true);
  };

  return (
    <div className="w-full">
      <Link href={`article/${element.cid}`}>
        <div className="cursor-pointer">
          <div className="flex items-center">
            <div className="bg-purple-400 w-12 h-12 rounded-full"></div>
            <div className="ml-3 mr-2 font-normal">{element?.author_name}</div>
            <span className="font-light">Recents</span>
          </div>
          <div className="flex">
            <div className="w-3/4 m-4">
              <div className="font-bold text-3xl">
                {/* 15 Books You Should Read Atleast Once In Your Life Before You Die! */}
                {element?.title}
              </div>
              <div className="mt-2 font-light">
                {/* Even if you do not like reading, consider reading these books! — My
            purpose in making this list is to help each one of you discover the
            greatest books, written by the best literary minds of all time!
            These books have a universal theme, interesting characters */}
                {element?.content}
                <span>...</span>
              </div>
            </div>
            <div className=" w-36 h-36 ml-7 mb-2 bg-orange-300 "></div>
          </div>
        </div>
      </Link>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="bg-gray-300 m-1 ml-5  text-gray-700 rounded-full px-3 py-1">
            Self Improvement
          </div>
          <div className="font-light mx-3">12 min read</div>
          <div className="font-light">. Selected for you</div>
        </div>
        <div className="flex gap-2 items-center text-3xl">
          {!bookmarked ? (
            <MdOutlineBookmarkAdd
              className="cursor-pointer"
              onClick={bookmark}
            />
          ) : (
            <IoMdBookmark />
          )}
          {!liked && element.likes === 0 ? (
            <AiOutlineHeart className="cursor-pointer" onClick={like} />
          ) : (
            <div className="flex items-center justify-center">
              <AiFillHeart fill="red" />
              <span className="text-2xl">{element.likes}</span>
            </div>
          )}
        </div>
      </div>
      <div className="my-4 mb-6 w-full rounded-sm h-1  bg-gray-300"></div>
    </div>
  );
};

export default Card;
