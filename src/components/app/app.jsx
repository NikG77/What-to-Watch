import Main from "../main/main.jsx";
import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";
import {filmsType, mainFilmType, filmType} from "../../types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PropTypes from "prop-types";

class App extends PureComponent {

  _renderApp() {
    const {genreFilms, mainFilm, onGenreItemClick, onSmallMovieCardClick, film} = this.props;

    if (film === null) {
      return (
        <Main
          genreFilms={genreFilms}
          mainFilm={mainFilm}
          onSmallMovieCardClick={onSmallMovieCardClick}
          onGenreItemClick={onGenreItemClick}
        />
      );
    }
    if (film) {
      return (
        <MoviePage
          film={film}
          genreFilms={genreFilms}
          onSmallMovieCardClick={onSmallMovieCardClick}
        />
      );
    }

    return null;
  }

  render() {
    const {genreFilms, onSmallMovieCardClick} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev">
            <MoviePage
              film={genreFilms[0]}
              genreFilms={genreFilms}
              onSmallMovieCardClick={onSmallMovieCardClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  genreFilms: filmsType.isRequired,
  mainFilm: mainFilmType.isRequired,
  onGenreItemClick: PropTypes.func.isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
  film: PropTypes.oneOfType([
    filmType.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};

const mapStateToProps = (state) => ({
  genreFilms: state.genreMovies,
  film: state.movie,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreItemClick(genre) {
    dispatch(ActionCreator.setGenre(genre));
    dispatch(ActionCreator.getFilms());
  },
  onSmallMovieCardClick(film) {
    dispatch(ActionCreator.setFilm(film));
    dispatch(ActionCreator.setGenre(film.genre));
    dispatch(ActionCreator.getFilms());
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

