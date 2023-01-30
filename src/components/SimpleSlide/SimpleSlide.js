import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "../../common/settings";
import "../SimpleSlide/SimpleSlide.css";

const simpleslide = () => {
  return (
    <div className="main-slide">
      <div className="slide">
        <Slider {...Settings}>
          <div className="slideImgBox">
            <h1>Slide1</h1>
          </div>
          <div className="slideImgBox">
            <h1>Slide2</h1>
          </div>
          <div className="slideImgBox">
            <h1>Slide3</h1>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default simpleslide;
