import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAuthState } from "../redux/authSlice";
import Card from "./Card";

const ArticleBody = ({ data }: { data: any }) => {
  const [bookmarks, setBookmarks] = useState([""]);
  const { address } = useSelector(selectAuthState);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        "https://inscript-api.herokuapp.com/users/user-bookmarks",
        { address }
      );
      setBookmarks(response.data.data.articles);
    };
    fetchData();
  }, []);
  return (
    <div className="w-full md:w-8/12">
      <div className="ml-3 mt-7 text-3xl font-bold font-great-vibes italic text-purple-600">
        InScript
      </div>
      <div className="my-3 rounded-sm h-1  bg-gray-300"></div>
      {data && data.length > 0 ? (
        data.map((element: any, idx: any) => {
          return (
            <Card
              element={element}
              key={idx}
              isBookmarked={bookmarks.includes(element.cid)}
            />
          );
        })
      ) : (
        <h2 className="font-bold">No Articles to show</h2>
      )}
    </div>
  );
};

export default ArticleBody;
