import * as React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getGenre, getGenresList} from "../../reducer/watch/selectors";
import {getPromoMovie} from "../../reducer/data/selectors";
import {filmsType, filmType} from "../../types/types";

import Footer from "../footer/footer";
import GenresList from "../genres-list/genres-list";
import Header from "../header/header";
import MovieCardButtons from "../movie-card-buttons/movie-card-buttons";
import MoviesList from "../movies-list/movies-list";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const MoviesListWrapped = withActiveItem(MoviesList);

const Main = (props) => {

  const {
    activeGenre,
    genreFilms,
    genresList,
    mainFilm,
    onGenreItemClick
  } = props;

  const {
    genre,
    id,
    isFavorite,
    pictureBackground,
    poster,
    releaseDate,
    title
  } = mainFilm;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={pictureBackground} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

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

              <MovieCardButtons
                id={id}
                isFavorite={isFavorite}
              />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            genresList={genresList }
            activeGenre={activeGenre}
            onGenreItemClick={onGenreItemClick}
          />

          <MoviesListWrapped
            genreFilms={genreFilms}
          />

        </section>

        <Footer />

      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  genreFilms: filmsType.isRequired,
  genresList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string).isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  mainFilm: PropTypes.oneOfType([
    filmType.isRequired,
    () => null,
  ]),
  onGenreItemClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    activeGenre: getGenre(state),
    genresList: getGenresList(state),
    mainFilm: getPromoMovie(state),
  }
);


export {Main};

export default connect(mapStateToProps)(Main);

