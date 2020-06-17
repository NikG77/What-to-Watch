import Main from "../main/main.jsx";
import React from "react";
import PropTypes from "prop-types";

const smallMovieCardHandler = () => {};

const App = (props) => {

  const {films, genreFilm, titleFilm, releaseDate} = props;
  return (
    <Main
      films={films}
      genreFilm={genreFilm}
      titleFilm={titleFilm}
      releaseDate={releaseDate}
      onSmallMovieCardClick={smallMovieCardHandler}
    />
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  genreFilm: PropTypes.string.isRequired,
  titleFilm: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  onSmallMovieCardClick: PropTypes.func
};

export default App;

