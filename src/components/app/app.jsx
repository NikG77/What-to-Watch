import Main from "../main/main.jsx";
import React from "react";
import PropTypes from "prop-types";

const smallMovieCardHandler = () => {};

const App = (props) => {

  const {filmsTitles, genreFilm, titleFilm, releaseDate} = props;
  return (
    <Main
      filmsTitles={filmsTitles}
      genreFilm={genreFilm}
      titleFilm={titleFilm}
      releaseDate={releaseDate}
      onSmallMovieCardClick={smallMovieCardHandler}
    />
  );
};

App.propTypes = {
  filmsTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  genreFilm: PropTypes.string.isRequired,
  titleFilm: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  onSmallMovieCardClick: PropTypes.func
};

export default App;

