import Main from "../main/main.jsx";
import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";
import {filmsType, mainFilmType, filmType} from "../../types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PropTypes from "prop-types";
import Player from "../player/player.jsx";
// import VideoPlayer from "../video-player/video-player.jsx";

class App extends PureComponent {

  _renderApp() {
    const {genreFilms, mainFilm, onGenreItemClick, onSmallMovieCardClick, film, onPlayButtonClick, isPlayerActive, onExitPlayButtonClick} = this.props;

    if (film === null && !isPlayerActive) {
      return (
        <Main
          genreFilms={genreFilms}
          mainFilm={mainFilm}
          onSmallMovieCardClick={onSmallMovieCardClick}
          onGenreItemClick={onGenreItemClick}
          onPlayButtonClick={onPlayButtonClick}
        />
      );
    }
    if (film === null && isPlayerActive) {
      return (
        <Player
          src={mainFilm.previewVideo}
          isPlayerActive={isPlayerActive}
          onExitPlayButtonClick={onExitPlayButtonClick}
        />
      );
    }

    if (film && !isPlayerActive) {
      return (
        <MoviePage
          film={film}
          genreFilms={genreFilms}
          onSmallMovieCardClick={onSmallMovieCardClick}
          onPlayButtonClick={onPlayButtonClick}
        />
      );
    }
    if (film && isPlayerActive) {
      return (
        <Player
          src={film.previewVideo}
          isPlayerActive={isPlayerActive}
          onExitPlayButtonClick={onExitPlayButtonClick}
        />
      );
    }

    return null;
  }

  render() {
    const {genreFilms, onSmallMovieCardClick, onPlayButtonClick, mainFilm, onExitPlayButtonClick} = this.props;
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
              onPlayButtonClick={onPlayButtonClick}
            />
          </Route>
          <Route exact path="/play">
            <Player
              src={mainFilm.previewVideo}
              isPlayerActive={true}
              onExitPlayButtonClick={onExitPlayButtonClick}
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
  onPlayButtonClick: PropTypes.func.isRequired,
  onExitPlayButtonClick: PropTypes.func.isRequired,
  isPlayerActive: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  genreFilms: state.genreMovies,
  film: state.movie,
  isPlayerActive: state.isPlayerActive,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreItemClick(genre) {
    dispatch(ActionCreator.setGenre(genre));
    dispatch(ActionCreator.resetFilmsCount());
    dispatch(ActionCreator.getFilms());
  },
  onSmallMovieCardClick(film) {
    dispatch(ActionCreator.setFilm(film));
    dispatch(ActionCreator.setGenre(film.genre));
    dispatch(ActionCreator.getFilms());
  },
  onPlayButtonClick() {
    dispatch(ActionCreator.setPlayer());
  },
  onExitPlayButtonClick() {
    dispatch(ActionCreator.resetPlayer());
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

