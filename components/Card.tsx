import React from "react";
import { MdOutlineBookmarkAdd } from "react-icons/Md";
import { IoMdBookmark } from "react-icons/Io";

const Card = () => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        <div className="bg-purple-400 w-12 h-12 rounded-full"></div>
        <div className="ml-3 mr-2 font-normal">Evans Crossby</div>
        <span className="font-light">. May 26</span>
      </div>
      <div className="flex">
        <div className="w-3/4 m-4">
          <div className="font-bold text-3xl">
            15 Books You Should Read Atleast Once In Your Life Before You Die!
          </div>
          <div className="mt-2 font-light">
            Even if you do not like reading, consider reading these books! — My
            purpose in making this list is to help each one of you discover the
            greatest books, written by the best literary minds of all time!
            These books have a universal theme, interesting characters
            <span>...</span>
          </div>
        </div>
        <div className=" w-36 h-36 ml-7 mb-2 bg-orange-300 "></div>
      </div>
      <div className="flex justify-start items-center">
        <div className="bg-gray-300 m-1 ml-5  text-gray-700 rounded-full px-3 py-1">
          Self Improvement
        </div>
        <div className="font-light mx-3">12 min read</div>
        <div className="font-light">. Selected for you</div>
      </div>
      {/* <div className="flex justify-end items-center">
        {from === "bookmark" ? <MdOutlineBookmarkAdd /> : <IoMdBookmark />}
      </div> */}

      <div className="my-3 w-full rounded-sm h-1  bg-gray-300"></div>
    </div>
  );
};

export default Card;
