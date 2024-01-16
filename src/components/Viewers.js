import React from "react";
import styled from "styled-components";
import disney from "../images/viewers-disney.png";
import marvel from "../images/viewers-marvel.png";
import national from "../images/viewers-national.png";
import pixar from "../images/viewers-pixar.png";
import starwars from "../images/viewers-starwars.png";
import DisneyVideo from "../videos/1564674844-disney.mp4";
import MarvelVideo from "../videos/1564676115-marvel.mp4";
import nationalVideo from "../videos/1564676296-national-geographic.mp4";
import pixarVideo from "../videos/1564676714-pixar.mp4";
import starVideo from "../videos/1608229455-star-wars.mp4";

const Viewers = () => {
  return (
    <Container className="container-fluid">
      <Wrap className="me-lg-3">
        <img src={disney} alt="" />
        <video src={DisneyVideo} loop={true} autoPlay={true}></video>
      </Wrap>
      <Wrap className="me-lg-3">
        <img src={marvel} alt="" />
        <video src={MarvelVideo} loop={true} autoPlay={true}></video>
      </Wrap>
      <Wrap className="me-lg-3">
        <img src={national} alt="" />
        <video src={nationalVideo} loop={true} autoPlay={true} />
      </Wrap>
      <Wrap className="me-lg-3">
        <img src={pixar} alt="" />
        <video src={pixarVideo} loop={true} autoPlay={true} />
      </Wrap>
      <Wrap>
        <img src={starwars} alt="" />
        <video src={starVideo} loop={true} autoPlay={true} />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: between;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div {
      margin-bottom: 2rem;
      height: 200px;
      width: 100%;
    }
  }
  @media screen and (max-width: 400px) {
    margin-top: 4rem;
  }
`;

const Wrap = styled.div`
  position: relative;
  height: 140px;
  width: 700px;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;

  & > img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  video {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    border: 4px solid #fff;
    transform: scale(1.05);
    transition: 1s;

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
