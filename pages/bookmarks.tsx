import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { connectWallet, selectAuthState } from "../redux/authSlice";
import Container from "../components/Container";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const { address } = useSelector(selectAuthState);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (!address) dispatch(connectWallet());
    async function fetchData() {
      const response = await axios.post(
        "https://inscript-api.herokuapp.com/users/bookmarked",
        {
          address: address,
        }
      );
      setBookmarks(response.data.data.articles);
    }
    fetchData();
  }, []); //eslint-disable-line

  return (
    <Container from="bookmarks" data={bookmarks} title="Bookmarks - Inscript">
      <></>
    </Container>
  );
};

export default Bookmarks;
