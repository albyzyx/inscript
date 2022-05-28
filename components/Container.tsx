import React from "react";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import ArticleBody from "./ArticleBody";
import BottomBar from "./BottomBar";

const Container = ({ children, from }: { children: any; from: any }) => {
  return (
    <main className="flex flex-col justify-between">
      <div className="flex justify-between h-screen">
        <LeftBar from={from} />
        <ArticleBody />
        <RightBar />
        {children}
      </div>
      <BottomBar from={from} />
    </main>
  );
};

export default Container;
