import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import axios from "axios";
import Bookmarks from "./bookmarks";

const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://127.0.0.1:8080/articles/get");
      setArticles(response.data.data.articles);
    };

    console.log(articles);
    fetchData();
  }, []); //eslint-disable-line

  return (
    <Container from="home">
      <></>
      <Bookmarks />
    </Container>
  );
};

export default Home;
