import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import axios from "axios";
import { connectWallet, selectAuthState } from "../redux/authSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const { address } = useSelector(selectAuthState);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://127.0.0.1:8080/articles/get");
      setArticles(response.data.data.articles);
      dispatch(connectWallet());
    };
    fetchData();
  }, []); //eslint-disable-line

  return (
    <Container from="home">
      <></>
    </Container>
  );
};

export default Home;
