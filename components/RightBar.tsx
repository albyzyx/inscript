import React from "react";
import Searchbar from "./Searchbar";

const RightBar = () => {
  return (
    <div className="hidden md:flex flex-col gap-4 border-l-4 py-10 px-4">
      <Searchbar />
      <div className="">Recommended topics</div>
      <div className="">who to follow</div>
      <div className="">Reading List</div>
    </div>
  );
};

export default RightBar;
