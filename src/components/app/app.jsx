import Main from "../main/main.jsx";
import React from "react";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {genreFilm, titleFilm, releaseDate} = props;
  return (
    <Main
      genreFilm={genreFilm}
      titleFilm={titleFilm}
      releaseDate={releaseDate}
    />
  );
};

export default App;


