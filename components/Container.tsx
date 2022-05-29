import React from "react";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import ArticleBody from "./ArticleBody";
import BottomBar from "./BottomBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = ({
  children,
  from,
  data,
}: {
  children: any;
  from: any;
  data: any;
}) => {
  return (
    <main className="flex flex-col justify-between">
      <div className="flex justify-between h-screen">
        <LeftBar from={from} />
        <ArticleBody data={data} />
        <RightBar />
        {children}
      </div>
      <BottomBar from={from} />
      <ToastContainer
        position="top-center"
        theme="dark"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </main>
  );
};

export default Container;
