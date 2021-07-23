import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
export const apiKey = process.env.REACT_APP_API_KEY;
export const sliderConfig = {
  arrows: true,
  accessibility: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: (
    <button className="arrow-button">
      <ArrowForwardIosIcon className="slick-arrows" />
    </button>
  ),
  prevArrow: (
    <button className="arrow-button">
      <ArrowBackIosIcon className="slick-arrows" />
    </button>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};
export const imageSliderConfig = {
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
      breakpoint: 10000,
      centerMode: true,
    },
  ],
};
export const sliderImages = [
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
