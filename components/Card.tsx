import React from "react";

const Card = () => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        <div className="bg-purple-400 w-12 h-12 rounded-full"></div>
        <div className="ml-3 mr-2 font-normal">Evans Crossby</div>
        <span className="font-light">. May 26</span>
      </div>
      <div className="font-bold m-3 text-3xl">
        15 Books You Should Read Atleast Once In Your Life Before You Die!
      </div>
      <div className="my-3 w-full rounded-sm h-1  bg-gray-300"></div>
    </div>

    // <div className=" border-b-2 flex flex-col gap-4 ">
    //   <div className="bg-purple-400 w-12 h-12 rounded-full"></div>
    //   <div>Name</div>
    //   <div className="flex justify-center items-start gap-4 ">
    //     <div className="flex flex-col gap-4 w-5/6">
    //       <div>Title</div>
    //       <div>content</div>
    //       <div className="flex w-64 items-center justify-between px-4">
    //         <div>Tags</div>
    //         <div>icons</div>
    //       </div>
    //     </div>
    //     <div className="bg-black w-24 h-24 rounded-full"></div>
    //   </div>
    // </div>
  );
};

export default Card;
