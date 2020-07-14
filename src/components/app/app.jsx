import Main from "../main/main.jsx";
import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";
import {filmsType, filmType} from "../../types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/watch/watch.js";
// import {AuthorizationStatus} from "../../reducer/user/user.js";
import PropTypes from "prop-types";
import Player from "../player/player.jsx";
import withVideo from "../../hocs/with-video/with-video.js";
import {getGenreMovies, getMovie, getIsPlayerActive} from "../../reducer/watch/selectors.js";
import {getPromoMovie} from "../../reducer/data/selectors.js";
// import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
// import {Operation as UserOperation} from "../../reducer/user/user.js";


const PlayerWrapped = withVideo(Player);

class App extends PureComponent {

  _renderApp() {

    // const {genreFilms, mainFilm, onGenreItemClick, onSmallMovieCardClick, film, onPlayButtonClick, isPlayerActive, onExitPlayButtonClick, authorizationStatus, login} = this.props;
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
        <PlayerWrapped
          src={mainFilm.videoLink}
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
        <PlayerWrapped
          src={film.videoLink}
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
            <PlayerWrapped
              src={mainFilm.previewVideo}
              onExitPlayButtonClick={onExitPlayButtonClick}
            />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  // authorizationStatus: PropTypes.string.isRequired,
  // login: PropTypes.func.isRequired,
  genreFilms: filmsType.isRequired,
  mainFilm: filmType.isRequired,
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
  genreFilms: getGenreMovies(state),
  film: getMovie(state),
  isPlayerActive: getIsPlayerActive(state),
  mainFilm: getPromoMovie(state),
  // authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  // login(authData) {
  //   dispatch(UserOperation.login(authData));
  // },
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

