import React from "react";
import PropTypes from "prop-types";

const GenresList = (props) => {
  const {genresList, onGenreItemClick, activeGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {genresList ? genresList.map((genre) => (
        <li key={genre}
          onClick={(evt) => {
            evt.preventDefault();
            onGenreItemClick(genre);
          }}
          className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      )) : ``}
    </ul>
  );
};

GenresList.propTypes = {
  genresList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string).isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  activeGenre: PropTypes.string.isRequired,
  onGenreItemClick: PropTypes.func.isRequired,
};

export default GenresList;

