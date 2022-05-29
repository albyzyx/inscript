import React from "react";
import Card from "./Card";

const ArticleBody = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div className="w-full md:w-8/12">
      <div className="ml-3 mt-7 text-3xl font-bold font-great-vibes italic text-purple-600">
        InScript
      </div>
      <div className="my-3 rounded-sm h-1  bg-gray-300"></div>
      {data && data.length > 0 ? (
        data.map((element: any, idx: any) => {
          return <Card element={element} key={idx} />;
        })
      ) : (
        <h2 className="font-bold">No Articles to show</h2>
      )}
    </div>
  );
};

export default ArticleBody;
