import Main from "../main/main.jsx";
import React from "react";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
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

export default App;


