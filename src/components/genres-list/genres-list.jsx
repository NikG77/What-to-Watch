import React from "react";
import PropTypes from "prop-types";
import {filmsType} from "../../types";

const ALL_GENRES = `All genres`;

const GenresList = (props) => {
  const {films, activeGenre} = props;
  const genresList = Array.from(new Set(films.map((film) => film.genre)));
  genresList.sort().unshift(ALL_GENRES);

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) => (
        <li key={genre}
          className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  films: filmsType.isRequired,
  activeGenre: PropTypes.string.isRequired,
};

export default GenresList;

