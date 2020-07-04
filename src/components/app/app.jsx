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
    const {films, mainFilm, onGenreItemClick, onSmallMovieCardClick, film} = this.props;

    if (film === null) {
      return (
        <Main
          films={films}
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
          films={films}
          onSmallMovieCardClick={onSmallMovieCardClick}
        />
      );
    }

    return null;
  }

  render() {
    const {films, onSmallMovieCardClick} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev">
            <MoviePage
              film={films[0]}
              films={films}
              onSmallMovieCardClick={onSmallMovieCardClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: filmsType.isRequired,
  mainFilm: mainFilmType.isRequired,
  onGenreItemClick: PropTypes.func.isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
  film: PropTypes.oneOfType([
    filmType.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};

const mapStateToProps = (state) => ({
  films: state.movies,
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

