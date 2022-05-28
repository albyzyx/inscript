import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useSelector } from "react-redux";

import "react-quill/dist/quill.snow.css";
import { uploadArticleToIPFS } from "../services/articleHelper";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import { selectAuthState } from "../redux/authSlice";
import { uploadImageToIPFS } from "../services/ipfsHelper";

const Write = () => {
  const { address } = useSelector(selectAuthState);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState();

  const onSubmit = () => {
    uploadArticleToIPFS(address, title, value);
  };

  async function onChange(e: any) {
    const file = e.target.files[0];
    setFile(file);
    const fileUrl = window.URL.createObjectURL(file);
    // await this
    // uploadImageToIPFS(fileUrl);
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}>
      <ReactQuill
        style={{
          width: "70%",
        }}
        value={value}
        onChange={setValue}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}>
        <input placeholder="title" className="border-2 " type="text" />
        <input
          required
          className="ip-field"
          type="file"
          name="Asset"
          onChange={onChange}
        />
        <button className="border-2 rounded-lg" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Write;
