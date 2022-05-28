import React from "react";
import { FiSearch } from "react-icons/Fi";

const Searchbar = () => {
  return (
    <div className="border-b-2 border-black py-2 px-3 flex items-center gap-2">
      <FiSearch className="text-2xl pr-1" />
      <input
        type="search"
        placeholder="Search Here"
        className="w-48 focus:outline-none "
      />
    </div>
  );
};

export default Searchbar;
