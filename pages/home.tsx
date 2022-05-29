import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import axios from "axios";
import { connectWallet, selectAuthState } from "../redux/authSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";
import { AppDispatch } from "../redux/store";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "25px",
  },
};

// Modal.setAppElement("#root");

const Home = () => {
  const [articles, setArticles] = useState([]);
  var [bookmarked, setBookmarked] = useState([]);
  const { address } = useSelector(selectAuthState);
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://127.0.0.1:8080/articles/get");
      setArticles(response.data.data.articles);
    };
    fetchData();
  }, []); //eslint-disable-line

  useEffect(() => {
    const sendData = async () => {
      const response = await axios.post(
        "http://127.0.0.1:8080/users/get-name",
        { address: address }
      );
      if (!response.data.data.username) setOpen(true);
    };
    if (!address) dispatch(connectWallet());
    else sendData();
  }, []); //eslint-disable-line

  const addUser = async () => {
    const response = await axios.post("http://127.0.0.1:8080/users/create", {
      name,
      wallet_address: address,
    });
    if (response.data.success) {
      toast.success("Logged in Successfully");
      setOpen(!open);
      setName("");
    }
  };

  return (
    <Container from="home" data={articles}>
      <Modal isOpen={open} style={customStyles}>
        <div className="flex flex-col items-start justify-center gap-4">
          <label
            htmlFor="name"
            className="text-2xl flex justify-between items-center w-full"
          >
            <span>Name</span>
            <AiOutlineClose onClick={() => setOpen(!open)} />
          </label>
          <input
            type="text"
            className="w-64 rounded-md border-2 outline-none border-gray-400 py-2 px-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <button
            className="px-3 py-2 outline-none border-black border-2 rounded-md self-center"
            onClick={addUser}
          >
            Submit
          </button>
        </div>
      </Modal>
    </Container>
  );
};

export default Home;
