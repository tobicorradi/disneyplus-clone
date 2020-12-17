import React from "react";
import Slider from "react-slick";
import { sliderImages, imageSliderConfig } from "../../utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
const imageSlider = () => {
  return (
    <article>
      <Slider className="imageSlider" {...imageSliderConfig}>
        {sliderImages.map((image) => (
          <div className="slider__container" key={image.id}>
            <img className="slider__textImage" src={image.textImage} />
            <div class="slider__imgContainer">
              <img className="slider__img" src={image.url} />
            </div>
          </div>
        ))}
      </Slider>
    </article>
  );
};

export default imageSlider;
