import React, { useEffect, useState } from "react";
import LeftBar from "../../components/LeftBar";
import RightBar from "../../components/RightBar";
import { MdBookmarkAdd } from "react-icons/md";
import { FaTelegram, FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FiLink } from "react-icons/fi";
import { useRouter } from "next/router";
import { getJSONFromIpfs } from "../../services/ipfsHelper";

import ReactHtmlParser from "react-html-parser";
import axios from "axios";
import { useSelector } from "react-redux";
export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const Article = () => {
  const router = useRouter();
  const { cid } = router.query;
  const [blogContent, setBlogContent] = useState("");
  const [title, setTitle] = useState("");
  const [authorAddress, setAuthorAddress] = useState("");
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    getJSONFromIpfs(cid as string).then((data) => {
      setBlogContent(data.content);
      setAuthorAddress(data.author_address);
      setTitle(data.title);
      console.log(data);
    });
  }, []);

  useEffect(() => {
    if (authorAddress !== "") {
      const fetchData = async () => {
        const response = await axios.post(
          "https://inscript-api.herokuapp.com/users/get-name",
          {
            address: authorAddress,
          }
        );
        setAuthorName(response.data.data.username);
      };
      fetchData();
    }
  }, [authorAddress]);
  return (
    <div className="flex h-screen justify-between">
      <LeftBar from="" />
      <div className="w-11/12  mt-16 mx-20">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <img
              className="bg-purple-400 w-20 h-20 rounded-full"
              src={`https://avatars.dicebear.com/api/identicon/your-${authorAddress}custom-seed.svg`}
            />
            <div className="items-center">
              <div className="flex text-xl ">
                <div className="ml-3 mr-2 text-2xl font-bold">{authorName}</div>
              </div>
              <div className="flex ml-1 w-full  items-center justify-between">
                <div className="flex text-lg items-center">
                  <span className="font-light pl-2"> May 29</span>
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
        <div className="font-bold my-10 text-4xl">{title}</div>
        <div className="text-xl my-4">{ReactHtmlParser(blogContent)}</div>
      </div>
      <RightBar />
    </div>
  );
};

export default Article;
