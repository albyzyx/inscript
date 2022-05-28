import React from "react";

const Card = () => {
  return (
    <div className=" border-b-2 flex flex-col gap-4 ">
      <div>Name</div>
      <div className="flex justify-center items-start gap-4 ">
        <div className="flex flex-col gap-4 w-5/6">
          <div>Title</div>
          <div>content</div>
          <div className="flex w-full items-center justify-between px-4">
            <div>Tags</div>
            <div>icons</div>
          </div>
        </div>
        <div className="bg-black w-24 h-24 rounded-full"></div>
      </div>
    </div>
  );
};

export default Card;
