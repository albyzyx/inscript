import React from "react";
import Searchbar from "./Searchbar";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import Image from "next/image";
import testAd from "./testAd.png";
import { RiAdvertisementFill } from "react-icons/ri";

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
      <div className="w-84 my-3  h-1 bg-gray-300 rounded-sm"></div>
      <div className="">
        <div className="font-bold text-xl mb-3"> Reading List</div>
        <div className="">
          <span>
            An article can be easily added to your reading list by clicking this
            <MdOutlineBookmarkAdd className="text-2xl " />
          </span>
        </div>
        <div className="relative rounded-xl ">
          <Image
            src={testAd}
            alt="hexads"
            style={{
              objectFit: "cover",
            }}
          />
          <RiAdvertisementFill className="absolute bottom-2 text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default RightBar;
