import Main from "../main/main.jsx";
import React from "react";
import PropTypes from "prop-types";

const App = (props) => {

  const {filmsTitles, genreFilm, titleFilm, releaseDate} = props;
  return (
    <Main
      filmsTitles={filmsTitles}
      genreFilm={genreFilm}
      titleFilm={titleFilm}
      releaseDate={releaseDate}
    />
  );
};

App.propTypes = {
  filmsTitles: PropTypes.array.isRequired,
  genreFilm: PropTypes.string.isRequired,
  titleFilm: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired
};

export default App;


