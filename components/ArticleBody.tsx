import React from "react";
import Card from "./Card";

const ArticleBody = () => {
  return (
    <div className="w-full md:w-8/12">
      <div className="ml-3 mt-7 text-xl font-vibes text-purple-600">
        InScript
      </div>
      <div className="my-3 rounded-sm h-1  bg-gray-300"></div>
      <Card />
    </div>
  );
};

export default ArticleBody;
