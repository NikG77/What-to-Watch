import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {films, mainFilm} from "./mock/films.js";


ReactDom.render(
    <App
      films={films}
      mainFilm={mainFilm}
    />,
    document.querySelector(`#root`)
);
