import * as React from "react";
import {filmType, filmsType} from "../../types/types";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import MoviesList from "../movies-list/movies-list.jsx";
import MovieCardButtons from "../movie-card-buttons/movie-card-buttons.jsx";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import {connect} from "react-redux";
import {getFilmById} from "../../reducer/watch/selectors.js";
import Loader from "../loader/loader.jsx";
import {Operation as OperationData} from "../../reducer/data/data.js";


const COUNT_LIKE_FILMS = 4;

const TabsWrapped = withActiveItem(Tabs);
const MoviesListWrapped = withActiveItem(MoviesList);

const MoviePage = (props) => {
  const {genreFilms, film, id, onGetComments} = props;
  if (!film) {
    return <Loader />;
  }

  onGetComments(id);
  const {title, genre, releaseDate, poster, pictureBackground, isFavorite} = film;
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

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <MovieCardButtons
                id={id}
                isMainPage={false}
                isFavorite={isFavorite}
              />

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
          {likeFilms.length > 0 ? <MoviesListWrapped genreFilms={likeFilms} /> : ``}
        </section>

        <Footer/>

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
  id: PropTypes.oneOfType([
    () => null,
    PropTypes.number.isRequired,
  ]),
  onGetComments: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  film: getFilmById(state, props.id),
});


const mapDispatchToProps = (dispatch) => ({
  onGetComments(id) {
    dispatch(OperationData.loadComments(id));
  },
});


export {MoviePage};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

