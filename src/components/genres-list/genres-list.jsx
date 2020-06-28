import React from "react";
// import PropTypes from "prop-types";
import {filmsType} from "../../types";

const ALL_GENRES = `All genres`;
const activGenre = ALL_GENRES;

const GenresList = (props) => {
  const {films} = props;
  const genresList = Array.from(new Set(films.map((film) => film.genre)));
  genresList.sort().unshift(ALL_GENRES);

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre, i) => (
        <li key={genre + i}
          className={`catalog__genres-item ${genre === activGenre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}

    </ul>

  );
};

GenresList.propTypes = {
  films: filmsType.isRequired,
};

export default GenresList;

