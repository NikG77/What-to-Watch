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
  previewVideo: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
}));

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
  previewVideo: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  videoLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
});


