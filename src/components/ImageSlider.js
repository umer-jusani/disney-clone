import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "../images/slider-badag.jpg";
import slider2 from "../images/slider-badging.jpg";
import slider3 from "../images/slider-scale.jpg";
import slider4 from "../images//slider-scales.jpg";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div>
      <Carousel {...settings}>
        <div>
          <img src={slider1} alt="" />
        </div>
        <div>
          <img src={slider2} alt="" />
        </div>
        <div>
          <img src={slider3} alt="" />
        </div>
        <div>
          <img src={slider4} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

const Carousel = styled(Slider)`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    opacity: 0;

    &:hover {
      opacity: 1;
      transition-duration: 1s;
    }
  }

  ul li button {
    &:before {
      font-size: 12px;
      color: rgb(150, 158, 171);
      margin-top: 0.5rem;
    }
  }

  .slick-dots li.slick-active button:before {
    color: white;
  }

  div {
    height: 342px;
    width: 99%;
    border-radius: 20px;
    margin-bottom: 2px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px --10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }

  img {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    filter: drop-shadow(10px 10px 10px #090b13);

    &:hover {
      border: 4px solid #fff;
      transition-duration: 300ms;
    }
  }

  .slick-list {
    overflow: initial;
  }

  @media screen and (max-width: 400px) {
    div {
      height: 150px;
      width: 95%;
    }
  }
`;

export default ImageSlider;
