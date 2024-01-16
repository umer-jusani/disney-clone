import { React, useEffect, useState } from "react";
import styled from "styled-components";
import HomeBackground from "../images/home-background.png";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import NewDisney from "./NewDisney";
import Recommands from "./Recommands";
import Originals from "./Originals";
import Trending from "./Trending";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { setMovies } from "../features/movies/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoggedInDetails } from "../features/User/userSlice";

const Home = () => {
  const Username = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  let recommend = [];
  let original = [];
  let newDisney = [];
  let trending = [];

  const data = async () => {
    const querySnapshot = await getDocs(collection(db, "movies"));
    querySnapshot.forEach((doc) => {
      switch (doc.data().type) {
        case "recommend":
          recommend = [...recommend, { id: doc.id, ...doc.data() }];
          break;

        case "new":
          newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
          break;

        case "trending":
          trending = [...trending, { id: doc.id, ...doc.data() }];
          break;

        case "original":
          original = [...original, { id: doc.id, ...doc.data() }];
          break;

        default:
          break;
      }
    });

    dispatch(
      setMovies({
        recommend: recommend,
        newDisney: newDisney,
        trending: trending,
        original: original,
      })
    );
  };

  // Fetcting data from Firestore Firebase
  useEffect(() => {
    data();
    dispatch(
      setUserLoggedInDetails({
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        photo: localStorage.getItem("photo"),
      })
    );
  }, []);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommands />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  overflow: hidden;
  top: 80px;
  width: 100%;
  min-height: calc(100vh);
  background: url(${HomeBackground}) center center / cover no-repeat fixed;
  padding: 0 3rem;

  @media (max-width: 600px) {
    padding: 0 2rem;
  }
`;

export default Home;
