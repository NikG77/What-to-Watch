import Main from "../main/main.jsx";
import React from "react";
import PropTypes from "prop-types";

const smallMovieCardHandler = () => {};

const App = (props) => {
  // eslint-disable-next-line react/prop-types
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
  filmsTitles: PropTypes.array.isRequired,
  genreFilm: PropTypes.string.isRequired,
  titleFilm: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired
};

export default App;

