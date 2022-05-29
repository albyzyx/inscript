import React, { useEffect } from "react";
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
import LeftBar from "../components/LeftBar";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { AppDispatch } from "../redux/store";

const Write = () => {
  const { address } = useSelector(selectAuthState);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState();
  const [image, setImage] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!address) dispatch(connectWallet());
  }, []);

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
        toast.success("Blog Published successfully");
        router.push("/home");
      });
  };

  async function onChange(e: any) {
    const file = e.target.files[0];
    setFile(file);
    const fileUrl = window.URL.createObjectURL(file);
    setImage(await uploadImageToIPFS(fileUrl));
  }

  return (
    <div className="flex h-screen">
      <LeftBar from="write" />
      <div className="m-10 w-full flex flex-col items-center justify-center">
        <input
          placeholder="Title"
          className="border-2 mb-10 text-4xl font-serif text-center focus:outline-none p-2 w-2/5 "
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <ReactQuill
          className="w-11/12 h-96"
          value={value}
          onChange={setValue}
        />

        <div className="flex justify-between w-11/12 items-center">
          <input
            required
            className="mt-16"
            type="file"
            name="Asset"
            onChange={onChange}
          />
          <button
            className="border-5 h-8 w-24 mt-16 rounded-xl bg-gray-300 text-black "
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Write;
