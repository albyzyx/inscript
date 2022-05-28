import React from "react";
import LeftBar from "./LeftBar";
import RightBar from "./Rightbar";
import ArticleBody from "./ArticleBody";

const Container = ({ children, from }: { children: any; from: any }) => {
  return (
    <main className="flex justify-between h-screen">
      <LeftBar from={from} />
      <ArticleBody />
      <RightBar />

      {children}
    </main>
  );
};

export default Container;
