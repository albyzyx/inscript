import React from "react";
import LeftBar from "../../components/LeftBar";
import RightBar from "../../components/RightBar";
import { MdBookmarkAdd } from "react-icons/Md";
import { FaTelegram, FaFacebook } from "react-icons/Fa";
import { ImLinkedin } from "react-icons/Im";
import { FiLink } from "react-icons/Fi";
import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();
  const cid = router.query;
  return (
    <div className="flex h-screen justify-between">
      <LeftBar from="" />
      <div className="w-11/12  mt-16 ml-20">
        <div className="flex items-center">
          <div className="bg-purple-400 w-20 h-20 rounded-full"></div>
          <div className="items-center">
            <div className="flex text-xl ">
              <div className="ml-3 mr-2 text-2xl font-bold">Evans Crossby</div>
            </div>
            <div className="flex ml-1 w-full  items-center justify-between">
              <div className="flex text-lg items-center">
                <span className="font-light pl-2"> May 26</span>
                <div className="font-light mx-3"> . 12 min read</div>
              </div>
            </div>
          </div>
          <div className="text-3xl flex ">
            <span className="text-gray-400 hover:text-gray-700">
              <FaTelegram />
            </span>
            <span className="text-gray-400 hover:text-gray-700">
              <FaFacebook />
            </span>
            <span className="text-gray-400 hover:text-gray-700">
              <ImLinkedin />
            </span>
            <span className="text-gray-400 hover:text-gray-700">
              <FiLink />
            </span>
            <span className="text-gray-400 hover:text-gray-700">
              <MdBookmarkAdd />
            </span>
          </div>
        </div>
      </div>
      <RightBar />
    </div>
  );
};

export default Article;
