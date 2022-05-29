import React, { useEffect, useState } from "react";
import LeftBar from "../../components/LeftBar";
import RightBar from "../../components/RightBar";
import { MdBookmarkAdd } from "react-icons/Md";
import { FaTelegram, FaFacebook } from "react-icons/Fa";
import { ImLinkedin } from "react-icons/Im";
import { FiLink } from "react-icons/Fi";
import { useRouter } from "next/router";
import { getJSONFromIpfs } from "../../services/ipfsHelper";

import ReactHtmlParser from "react-html-parser";

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const Article = () => {
  const router = useRouter();
  const { cid } = router.query;
  const [blogContent, setBlogContent] = useState("");
  useEffect(() => {
    console.log(router);
    getJSONFromIpfs(cid as string).then((data) => {
      setBlogContent(data.content);
      console.log(data.content);
    });
  }, []);
  return (
    <div className="flex h-screen justify-between">
      <LeftBar from="" />
      <div className="w-11/12  mt-16 mx-20">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="bg-purple-400 w-20 h-20 rounded-full"></div>
            <div className="items-center">
              <div className="flex text-xl ">
                <div className="ml-3 mr-2 text-2xl font-bold">
                  Evans Crossby
                </div>
              </div>
              <div className="flex ml-1 w-full  items-center justify-between">
                <div className="flex text-lg items-center">
                  <span className="font-light pl-2"> May 26</span>
                  <div className="font-light mx-3"> . 12 min read</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-4xl flex  gap-5">
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
        <div className="font-bold my-10 text-4xl">
          Ten Principles for Growth as an Engineer
        </div>
        <div className="text-xl my-4">{ReactHtmlParser(blogContent)}</div>
      </div>
      <RightBar />
    </div>
  );
};

export default Article;
