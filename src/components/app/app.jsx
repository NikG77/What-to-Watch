import Main from "../main/main.jsx";
import React from "react";

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

export default App;

