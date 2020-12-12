import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
const imageSlider = () => {
  const config = {
    dots: true,
    accessibility: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 700,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 992,
      },
      {
        breakpoint: 10000, // a unrealistically big number to cover up greatest screen resolution
        centerMode: true,
      },
    ],
  };
  const images = [
    {
      id: "1",
      textImage:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F33AA99395CB84E547F8D4ED40D9328D48201FEAF1EF431E4EF3C2F7509A6D09/scale?width=1440&aspectRatio=3.91",
      url:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/83363D03F4F637E001C0FF3BE7AE5B6461E498E1673A2EB944276D6399263C01/scale?width=1440&aspectRatio=3.91&format=jpeg",
    },
    {
      id: "2",
      textImage:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/28682B85A5D90C8639CA2438740F6DF1256540349A96761B28082E4D50EFBFFA/scale?width=1440&aspectRatio=3.91",
      url:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A48A0BD869191F88F25C46001A94B8146C43C0B8AA69220733A46444B49E80F/scale?width=1440&aspectRatio=3.91&format=jpeg",
    },
    {
      id: "3",
      textImage:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D650E8DB7537D1C7B607BD7D4046937FB96B8053448FD934D054B9782A95DDDF/scale?width=1440&aspectRatio=3.91 ",
      url:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D79190EE1ECBA1C48713150D430582515E92D47E824FB15BBB53CEA30D9B3BA/scale?width=1440&aspectRatio=3.91&format=jpeg",
    },
    {
      id: "4",
      textImage:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/816003FE6AD4DFC19E3CA024601A7179135744283C9571FFBE0AB05E5A3E25D7/scale?width=1440&amp;aspectRatio=3.91",
      url:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5E814613F6B18A9FE66B65EB49F75310A725668027051A9F502497124CE06B4B/scale?width=1440&aspectRatio=3.91&format=jpeg",
    },
    {
      id: "5",
      textImage:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/72FF1160F04E32A65899BB07A3A6AC58A06783E9806D82D95966D3745DF4EC70/scale?width=1440&aspectRatio=3.91",
      url:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A38B478F4FFCBF16886C14872D13CB64EC615E97B380028FC51162EC61495800/scale?width=1440&aspectRatio=3.91&format=jpeg",
    },
  ];
  return (
    <Slider className="imageSlider" {...config}>
      {images.map((image) => (
        <div className="slider__container" key={image.id}>
          <img className="slider__textImage" src={image.textImage} alt="" />
          <img className="slider__img" src={image.url} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default imageSlider;
