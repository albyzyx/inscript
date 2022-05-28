import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectAuthState } from "../redux/authSlice";
import Container from "../components/Container";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const { address } = useSelector(selectAuthState);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.post(
        "http://127.0.0.1:8080/users/bookmarked",
        {
          address,
        }
      );
      setBookmarks(response.data);
    }
    fetchData();
  }, []); //eslint-disable-line

  return (
    <Container from="bookmarks">
      <></>
    </Container>
  );
};

export default Bookmarks;
