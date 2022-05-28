import React from "react";
import LeftBar from "./LeftBar";
const Container = ({ children, from }: { children: any; from: any }) => {
  return (
    <main>
      <LeftBar from={from} />
      {children}
    </main>
  );
};

export default Container;
