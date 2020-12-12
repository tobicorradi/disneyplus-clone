import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
export const apiKey = "b9e91fb0399084749f4ee7ea4fdad27a";
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
