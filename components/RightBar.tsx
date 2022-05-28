import React from "react";
import Searchbar from "./Searchbar";

const RightBar = () => {
  return (
    <div className="border-l-4 ">
      <Searchbar />
      <div className="">Recommended topics</div>
      <div className="">who to follow</div>
      <div className="">Reading List</div>
    </div>
  );
};

export default RightBar;
