
import NameSpace from "../name-space.js";
import {getAllMovies} from "../../reducer/data/selectors.js";
import {createSelector} from "reselect";

const ALL_GENRES = `All genres`;

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

// export const getGenreMovies = (state) => {
//   return state[NAME_SPACE].genreMovies;
// };

export const getMovie = (state) => {
  return state[NAME_SPACE].movie;
};

export const getMovieCount = (state) => {
  return state[NAME_SPACE].movieCount;
};

export const getIsPlayerActive = (state) => {
  return state[NAME_SPACE].isPlayerActive;
};

