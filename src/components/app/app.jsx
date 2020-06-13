import Main from "../main/main.jsx";
import React from "react";
import PropTypes from "prop-types";

const App = (props) => {

  const {titleFilms, genreFilm, titleFilm, releaseDate} = props;
  return (
    <Main
      titleFilms={titleFilms}
      genreFilm={genreFilm}
      titleFilm={titleFilm}
      releaseDate={releaseDate}
    />
  );
};

App.propTypes = {
  titleFilms: PropTypes.array.isRequired,
  genreFilm: PropTypes.string.isRequired,
  titleFilm: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired
};

export default App;


