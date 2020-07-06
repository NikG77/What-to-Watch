import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import GenresList from "../genres-list/genres-list.jsx";
import {filmsType, mainFilmType} from "../../types";
import {connect} from "react-redux";
import MovieCardButtons from "../movie-card-buttons/movie-card-buttons.jsx";


const MoviesListWrapped = withActiveItem(MoviesList);

const Main = (props) => {

  const {genreFilms, mainFilm, onSmallMovieCardClick, onGenreItemClick, activeGenre, allFilms} = props;
  const {genre, title, releaseDate, poster, pictureBackground} = mainFilm;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={pictureBackground} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={title}width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <MovieCardButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            allFilms={allFilms}
            activeGenre={activeGenre}
            onGenreItemClick={onGenreItemClick}
          />

          <MoviesListWrapped
            genreFilms={genreFilms}
            onSmallMovieCardClick={onSmallMovieCardClick}
          />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  genreFilms: filmsType.isRequired,
  mainFilm: mainFilmType.isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreItemClick: PropTypes.func.isRequired,
  allFilms: filmsType.isRequired,
};

const mapStateToProps = (state) => (
  {
    activeGenre: state.genre,
    allFilms: state.allMovies,
  }
);

export {Main};
export default connect(mapStateToProps)(Main);

