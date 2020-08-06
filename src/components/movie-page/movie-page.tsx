import * as React from "react";
import {connect} from "react-redux";

import {FilmType} from "../../types";
import {getFilmById} from "../../reducer/watch/selectors";
import {Operation as OperationData} from "../../reducer/data/data";

import Footer from "../footer/footer";
import Header from "../header/header";
import Loader from "../loader/loader";
import MoviesList from "../movies-list/movies-list";
import MovieCardButtons from "../movie-card-buttons/movie-card-buttons";
import Tabs from "../tabs/tabs";
import withActiveItem from "../../hocs/with-active-item/with-active-item";


const COUNT_LIKE_FILMS = 4;

const TabsWrapped = withActiveItem(Tabs);
const MoviesListWrapped = withActiveItem(MoviesList);


interface Props {
  id: number;
  film: FilmType;
  genreFilms: Array<FilmType>;
  onGetComments: (id: number) => void;
}

const MoviePage: React.FunctionComponent<Props> = (props: Props) => {
  const {id, film, genreFilms, onGetComments} = props;
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
          {likeFilms.length > 0 && <MoviesListWrapped genreFilms={likeFilms} />}
        </section>

        <Footer/>

      </div>
    </React.Fragment>

  );
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

