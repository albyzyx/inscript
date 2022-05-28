import React from "react";
import { FiSearch } from "react-icons/Fi";

const Searchbar = () => {
  return (
    <div className="bg-[#454755] py-3 px-5 rounded-lg flex items-center gap-2">
      <FiSearch className="text-2xl pr-1" />
      <input
        type="search"
        placeholder="Search Here"
        className="w-80 focus:outline-none bg-[#454755]"
      />
      <button
        type="submit"
        className="bg-[#8f50df] text-black py-3 px-5 absolute right-0 rounded-r-lg"
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
