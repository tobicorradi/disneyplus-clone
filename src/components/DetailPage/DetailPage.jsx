import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Slider from "react-slick";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import GroupIcon from "@material-ui/icons/Group";
import MovieCard from "../MovieCard";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { Link, withRouter } from "react-router-dom";
import axios from "../../axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DetailPage.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}
const DetailPage = (props) => {
  const config = {
    arrows: true,
    accessibility: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
  const movieId = props.match.params.movieId;
  const [singleMovie, setSingleMovie] = useState([""]);
  const [recommended, setRecommended] = useState([""]);
  const [director, setDirector] = useState([""]);
  const [cast, setCast] = useState([""]);
  const [genres, setGenres] = useState([""]);

  useEffect(() => {
    axios
      .get(`movie/${movieId}?api_key=b9e91fb0399084749f4ee7ea4fdad27a`)
      .then((response) => {
        const { data } = response;
        setSingleMovie(data);
      });
    axios
      .get(
        `movie/${movieId}/recommendations?api_key=b9e91fb0399084749f4ee7ea4fdad27a&language=en-US&page=1`
      )
      .then((response) => {
        const { data } = response;
        setRecommended(data.results);
      });
    axios
      .get(
        `movie/${movieId}/credits?api_key=b9e91fb0399084749f4ee7ea4fdad27a&language=en-US`
      )
      .then((response) => {
        const { data } = response;
        setCast(data.cast);
        setDirector(data.crew);
      });
  }, [movieId]);
  console.log(director);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <main className="detailPage">
        <div className="detailPage__background">
          <div className="detailPage__overlay"></div>
          <img
            src={`https://image.tmdb.org/t/p/w1280/${singleMovie["backdrop_path"]}`}
          />
        </div>
        <div className="detailPage__info">
          <div className="detailPage__container">
            <h1 className="detailPage__title">{singleMovie["title"]}</h1>
            <div className="detaiPage__buttons">
              <Button
                className="detailPage__playBtn"
                startIcon={<PlayArrowIcon />}
              >
                Watch Now
              </Button>
              <Button
                className="detailPage__trailerBtn"
                startIcon={<PlayArrowIcon />}
              >
                Trailer
              </Button>
              <IconButton size="small" className="detailPage_radialBtn">
                <AddIcon />
              </IconButton>
              <IconButton size="small" className="detailPage_radialBtn">
                <GroupIcon />
              </IconButton>
            </div>
            <div className="detailPage__data">
              <span className="detailPage__years">
                {singleMovie["release_date"]}
              </span>
              <span className="detailPage__duration">
                {singleMovie["runtime"] + " minutes"}
              </span>
              {Array.isArray(singleMovie.genres) == true
                ? singleMovie.genres.map((genre) => (
                    <span className="detailPage__genres">{genre.name}</span>
                  ))
                : null}
            </div>
            <div className="detailPage__description">
              <p>{singleMovie["overview"]}</p>
            </div>
            <AppBar className="detailPage__tabsHeader" position="static">
              <Tabs value={value} onChange={handleChange}>
                <Tab label="Suggestions" />
                <Tab label="Extras" />
                <Tab label="Details" />
              </Tabs>
            </AppBar>
            <TabPanel className="tab__panel" value={value} index={0}>
              <Slider className="singleRow__slider" {...config}>
                {recommended.map((recommendedMovie) => (
                  <Link to={`/play/${recommendedMovie.id}`}>
                    <MovieCard
                      key={recommendedMovie.id}
                      title={recommendedMovie.title}
                      poster={recommendedMovie.backdrop_path}
                    />
                  </Link>
                ))}
              </Slider>
            </TabPanel>
            <TabPanel className="tab__panel" value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel className="tab__panel" value={value} index={2}>
              <div className="tab__container">
                <div className="tab__mainColumn">
                  <h2 className="tab__title">{singleMovie["title"]}</h2>
                  <p className="tab__description">{singleMovie["overview"]}</p>
                </div>
                <div className="tab__itemsColumn">
                  <div className="tab_itemSubColumn">
                    <div className="tab__item">
                      <h3 className="tab__subtitle">Duration:</h3>
                      <p>{singleMovie["runtime"]} minutes</p>
                    </div>
                    <div className="tab__item">
                      <h3 className="tab__subtitle">Release Date:</h3>
                      <p>{singleMovie["release_date"]}</p>
                    </div>
                    <div className="tab__item">
                      <h3 className="tab__subtitle">Genres:</h3>
                      {Array.isArray(singleMovie.genres) == true
                        ? singleMovie.genres.map((genre) => <p>{genre.name}</p>)
                        : null}
                    </div>
                  </div>
                  <div className="tab__itemSubColumn">
                    <div className="tab__item">
                      <h3 className="tab__subtitle">Director:</h3>
                      <p>director</p>
                    </div>
                    <div className="tab__item">
                      <h3 className="tab__subtitle">Cast:</h3>
                      {cast.slice(0, 4).map((actor) => (
                        <p>{actor.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </main>
    </>
  );
};

export default withRouter(DetailPage);
