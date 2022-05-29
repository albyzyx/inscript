import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import { selectAuthState } from "../redux/authSlice";
import axios from "axios";
import Head from "next/head";

const MyArticles = () => {
  const [articles, setArticles] = useState([]);
  const { address } = useSelector(selectAuthState);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.post(
        "http://127.0.0.1:8080/users/articles",
        { address }
      );
      setArticles(response.data.data.articles);
    }
    fetchData();
  }, []); //eslint-disable-line
  return (
    <Container from="myArticles" data={articles} title="My Articles - Inscript">
      <div></div>
    </Container>
  );
};

export default MyArticles;
