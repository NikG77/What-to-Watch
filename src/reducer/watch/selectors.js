
import NameSpace from "../name-space.js";
import {getAllMovies} from "../../reducer/data/selectors.js";
import {createSelector} from "reselect";

const ALL_GENRES = `All genres`;
const MAX_GENRES = 9;

const NAME_SPACE = NameSpace.WATCH;

export const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

export const getGenreMovies = createSelector(
    getAllMovies,
    getGenre,
    (allMovies, genre) => {
      return ALL_GENRES === genre ? allMovies : allMovies.filter((movie) => movie.genre === genre);
    }
);

const getSetGenres = createSelector(
    getAllMovies,
    (allFilms) => {
      return Array.from(new Set(allFilms.map((film) => film.genre)));
    }
);

const getFullGenresList = createSelector(
    getSetGenres,
    (genresList) => {
      return [ALL_GENRES].concat(genresList.sort());
    }
);

export const getGenresList = createSelector(
    getFullGenresList,
    (genresList) => {
      return genresList.slice(0, MAX_GENRES);
    }
);

export const getId = (state) => state[NAME_SPACE].id;

export const getFilm = createSelector(
    getAllMovies,
    getId,
    (films, id) => films.find((film) => film.id === id)
);

export const getMovieCount = (state) => {
  return state[NAME_SPACE].movieCount;
};

export const getIsPlayerActive = (state) => {
  return state[NAME_SPACE].isPlayerActive;
};

export const getReviewFormStatus = (state) => {
  return state[NAME_SPACE].isFormDisabled;
};

export const getFilmsLoadingStatus = (state) => state[NAME_SPACE].isFilmsLoading;

export const getPromoFilmLoadingStatus = (state) => state[NAME_SPACE].isPromoLoading;


