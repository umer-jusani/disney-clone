import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import playerBlack from "../images/play-icon-black.png";
import playerWhite from "../images/play-icon-white.png";
import groupwatch from "../images/group-icon.png";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  const fetchingData = async () => {
    try {
      const docRef = doc(db, "movies", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDetailData(docSnap.data());
      } else {
        console.log("No Such Document in the firebase");
      }
    } catch (error) {
      console.log("Something went WronG");
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt="" />
      </Background>

      <ImgTitle>
        <img src={detailData.titleImg} alt="" />
      </ImgTitle>

      <ContentMeta>
        <Control>
          <Player>
            <img src={playerBlack} />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src={playerWhite} alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span></span>
          </AddList>
          <GroupWatch>
            <img src={groupwatch} alt="" />
          </GroupWatch>
        </Control>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  with: 100%;
  padding-left: 4rem;
  padding-right: 4rem;
  height: 100vh;
  overflow-x: hidden;

  @media only screen and (max-width: 400px) {
    padding-left: 0.5rem;
    padding-right: 0.51rem;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  opacity: 0.5;
  rigth: 0;
  left: 0;
  z-index: -1;

  img {
    height: 100vh;
    width: 100vw;
  }

  @media only screen and (max-width: 400px) {
    img {
      object-fit: cover;
    }
  }
`;

const ImgTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0rem auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 40vw;
  }

  @media only screen and (max-width: 400px) {
    margin-top: 1rem;
  }
`;

const ContentMeta = styled.div`
  max-width: 700px;
  width: 100%;
  margin-top: 1rem;
`;

const Control = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Player = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;
  font-size: 25px;
  padding: 0 20px;
  margin-right: 16px;
  height: 70px;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 2px;
  // background-color: rgb(249, 249, 249);
  text-transform: uppercase;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background-color: rgb(198, 198, 198);
  }

  @media only screen and (max-width: 400px) {
    padding: 0 12px;
    font-size: 14px;
    font-weight: 600;
    height: 50px;
    margin-right: 10px;
    letter-spacing: 1px;

    img {
      width: 20px;
    }
  }
`;

const Trailer = styled(Player)`
  background-color: rgba(0, 0, 0, 0.4);
  color: rgb(249, 249, 249);
  border: 2px solid white;

  &:hover {
    background-color: rgb(0, 0, 0, 0.6);
  }

  @media only screen and (max-width: 400px) {
    margin-right: 5px;
  }
`;

const AddList = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  margin-right: 16px;
  cursor: pointer;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;

  span {
    width: 20px;
    color: 2gb (249, 249, 249);
    height: 2px;
    background-color: rgb(249, 249, 249);
    transform: translate(-50%, -50%);
  }

  span::before,
  span::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    color: rgb(249, 249, 249);
    background-color: rgb(249, 249, 249);
  }

  span::before {
    transform: rotate(90deg);
    color: rgb(249, 249, 249);
  }

  span::after {
    transform: rotate(180deg);
    color: rgb(249, 249, 249);
  }

  @media only screen and (max-width: 400px) {
    width: 45px;
    height: 45px;
    margin-right: 5px;
  }
`;

const GroupWatch = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 400px) {
    width: 45px;
    height: 45px;

    img {
      height: 25px;
      width: 25px;
    }
  }
`;

const SubTitle = styled.div`
  margin-top: 2rem;
  letter-spacing: 1.2px;
  font-size: 16px;

  @media only screen and (max-width: 400px) {
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: 600;
  }
`;

const Description = styled.div`
  font weight: 700;
  font-size: 20px; 
  letter-spacing: 1.2px;
  margin-top: 2rem;

  @media only screen and (max-width: 400px) {
    letter-spacing: 1px;
    font-size: 14px;
    line-height: 2;
  }
`;

export default Detail;
