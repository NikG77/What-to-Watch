import React from "react";
import PropTypes from "prop-types";
import {filmsType} from "../../types";

const ALL_GENRES = `All genres`;
const MAX_GENRES = 9;

const GenresList = (props) => {
  const {allFilms, onGenreItemClick, activeGenre} = props;
  const genresList = Array.from(new Set(allFilms.map((film) => film.genre)));
  genresList.sort().unshift(ALL_GENRES);
  genresList.splice(MAX_GENRES);

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) => (
        <li key={genre}
          onClick={(evt) => {
            evt.preventDefault();
            onGenreItemClick(genre);
          }}
          className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  allFilms: filmsType.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreItemClick: PropTypes.func.isRequired,
};

export default GenresList;

