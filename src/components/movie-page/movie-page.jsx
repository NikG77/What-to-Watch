import React from "react";
import {filmType, filmsType} from "../../types/types";
import PropTypes from "prop-types";
import {Tabs} from "../tabs/tabs.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import MoviesList from "../movies-list/movies-list.jsx";
import MovieCardButtons from "../movie-card-buttons/movie-card-buttons.jsx";
import Header from "../header/header.jsx";

const COUNT_LIKE_FILMS = 4;

const TabsWrapped = withActiveItem(Tabs);
const MoviesListWrapped = withActiveItem(MoviesList);

const MoviePage = (props) => {
  const {film, genreFilms, onSmallMovieCardClick, onPlayButtonClick} = props;
  const {title, genre, releaseDate, poster, pictureBackground} = film;
  const likeFilms = genreFilms.filter((movie) => {
    return movie !== film;
  });
  likeFilms.splice(COUNT_LIKE_FILMS);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={pictureBackground} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header
            isMain={false}
          />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <MovieCardButtons onPlayButtonClick={onPlayButtonClick} />
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">

              <TabsWrapped
                film={film}
              />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {likeFilms.length > 0 ? <MoviesListWrapped genreFilms={likeFilms} onSmallMovieCardClick={onSmallMovieCardClick} /> : ``}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2020 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>

  );
};

MoviePage.propTypes = {
  genreFilms: filmsType.isRequired,
  film: PropTypes.oneOfType([
    filmType.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  onSmallMovieCardClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default MoviePage;
