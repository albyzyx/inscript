import React, { useEffect, useState } from "react";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { IoMdBookmark } from "react-icons/io";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import { useSelector } from "react-redux";
import { connectWallet, selectAuthState } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { AppDispatch } from "../redux/store";
import Image from "next/image";

const Card = ({
  element,
  isBookmarked,
}: {
  element: any;
  isBookmarked: Boolean;
}) => {
  const [liked, setLiked] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const { address } = useSelector(selectAuthState);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (!address) dispatch(connectWallet());
  }, []);
  const bookmark = async () => {
    const response = await axios.post(
      "https://inscript-api.herokuapp.com/articles/bookmark",
      { address, cid: element.cid }
    );
    if (response.data.success) setBookmarked(true);
  };

  const like = async () => {
    const response = await axios.post(
      "https://inscript-api.herokuapp.com/articles/like",
      {
        address,
        cid: element.cid,
      }
    );
    if (response.data.success) setLiked(1);
  };

  // console.log(element);

  return (
    <div className="w-full">
      <Link href={`article/${element.cid}`}>
        <div className="cursor-pointer">
          <div className="flex items-center">
            <img
              className="bg-purple-400 w-12 h-12 rounded-full"
              src={`https://avatars.dicebear.com/api/identicon/your-${element.cid}custom-seed.svg`}
            />
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
                {/* Even if you do not like reading, consider reading these books! ??? My
            purpose in making this list is to help each one of you discover the
            greatest books, written by the best literary minds of all time!
            These books have a universal theme, interesting characters */}
                {element?.content}
                <span>...</span>
              </div>
            </div>
            {/* {element.image_url ? (
              <div>
                <img
                  src={`https:/nftstorage.link/ipfs/${element.image_url}`}
                  alt="image"
                  className="w-20 h-20 object-contain"
                />
              </div>
            ) : (
            )} */}
            {/* <div className=" w-36 h-36 ml-7 mb-2 rounded-full bg-purple-400"></div> */}
          </div>
        </div>
      </Link>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          {/* <div className="bg-gray-300 m-1 ml-5  text-gray-700 rounded-full px-3 py-1">
            Self Improvement
          </div> */}
          <div className="font-light mx-3">
            {Math.ceil(Math.random() * 10)} min read
          </div>
        </div>
        <div className="flex gap-2 items-center text-3xl">
          {!bookmarked && !isBookmarked ? (
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
              <span className="text-2xl">{element.likes + liked}</span>
            </div>
          )}
        </div>
      </div>
      <div className="my-4 mb-6 w-full rounded-sm h-1  bg-gray-300"></div>
    </div>
  );
};

export default Card;
