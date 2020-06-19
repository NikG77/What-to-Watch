import PropTypes from "prop-types";

export const filmsType = PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  ratingScore: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  pictureBackground: PropTypes.string.isRequired,
}));

export const mainFilmType = PropTypes.shape({
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  pictureBackground: PropTypes.string.isRequired,
});

export const filmType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  ratingScore: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  pictureBackground: PropTypes.string.isRequired,
});


