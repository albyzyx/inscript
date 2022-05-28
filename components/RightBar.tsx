import React from "react";
import Searchbar from "./Searchbar";
import { MdOutlineBookmarkAdd } from "react-icons/Md";

const RightBar = () => {
  return (
    <div className="hidden md:flex flex-col gap-4 border-l-4 py-10 px-4 w-1/4">
      <Searchbar />
      <div className="w-84 my-5 h-1 bg-gray-300 rounded-sm"></div>
      <div className="font-bold text-xl">Recommended topics</div>
      <div className="flex flex-wrap">
        <span className="bg-gray-300 m-1 text-gray-700 rounded-full px-4 py-2">
          Technology
        </span>
        <span className="bg-gray-300 m-1 text-gray-700  rounded-full px-4 py-2">
          Self Improvement
        </span>
        <span className="bg-gray-300 m-1 text-gray-700  rounded-full px-4 py-2">
          Cryptocurrency
        </span>
        <span className="bg-gray-300 m-1 text-gray-700  rounded-full px-4 py-2">
          Growth
        </span>
        <span className="bg-gray-300 m-1 text-gray-700  rounded-full px-4 py-2">
          Art
        </span>
        <span className="bg-gray-300 m-1  text-gray-700 rounded-full px-4 py-2">
          Coding
        </span>
        <span className="bg-gray-300 m-1  text-gray-700 rounded-full px-4 py-2">
          Psychology
        </span>
      </div>
      <div className="w-84 my-5 h-1 bg-gray-300 rounded-sm"></div>
      <div className="">
        <span className="font-bold text-xl"> Reading List</span>
        <div>
          Click the
          <span>
            <MdOutlineBookmarkAdd className="text-2xl" />
          </span>
          on any story to easily add it to your reading list or a custom list
          that you can share.
        </div>
      </div>
    </div>
  );
};

export default RightBar;
