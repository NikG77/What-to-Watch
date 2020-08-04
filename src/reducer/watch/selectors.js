
import NameSpace from "../name-space.js";
import {getAllMovies} from "../../reducer/data/selectors.js";
import {createSelector} from "reselect";

const ALL_GENRES = `All genres`;
const MAX_GENRES = 9;

const NAME_SPACE = NameSpace.WATCH;

export const getGenre = (state) => state[NAME_SPACE].genre;

export const getMovieCount = (state) => state[NAME_SPACE].movieCount;

export const getFilm = (state) => state[NAME_SPACE].selectedMovie;

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


const getIdByProps = (_, id) => id;

export const getFilmById = createSelector(
    [getAllMovies, getIdByProps],
    (allMovies, id) => {
      return allMovies.find((movie) => movie.id === id);
    });
