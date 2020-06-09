import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  GENRE_FILM: `Drama`,
  TITLE_FILM: `The Grand Budapest Hotel`,
  RELEASE_DATE: `2014`
};

ReactDom.render(
    <App
      genreFilm={Settings.GENRE_FILM}
      titleFilm={Settings.TITLE_FILM}
      releaseDate={Settings.RELEASE_DATE}
    />,
    document.querySelector(`#root`)
);
