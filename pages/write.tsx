import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useSelector } from "react-redux";

import "react-quill/dist/quill.snow.css";
import { uploadArticleToIPFS } from "../services/articleHelper";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import axios from "axios";
import { connectWallet, selectAuthState } from "../redux/authSlice";
import { uploadImageToIPFS } from "../services/ipfsHelper";
import { useDispatch } from "react-redux";

const Write = () => {
  const { address } = useSelector(selectAuthState);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState();
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const onSubmit = async () => {
    if (!address) dispatch(connectWallet());
    const cid = await uploadArticleToIPFS(address, title, value);
    console.log(cid);
    axios
      .post("http://localhost.tech:8080/articles/create", {
        address,
        cid,
        image,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  async function onChange(e: any) {
    const file = e.target.files[0];
    setFile(file);
    const fileUrl = window.URL.createObjectURL(file);
    setImage(await uploadImageToIPFS(fileUrl));
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
        <input
          placeholder="title"
          className="border-2 "
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
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
