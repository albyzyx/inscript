import React from "react";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  return (
    <div className="border-2 rounded-full border-gray-500  py-2 px-3 flex items-center gap-2">
      <FiSearch className="text-2xl pr-1 text-gray-500" />
      <input
        type="search"
        placeholder="Search Here"
        className="w-48 focus:outline-none "
      />
    </div>
  );
};

export default Searchbar;
