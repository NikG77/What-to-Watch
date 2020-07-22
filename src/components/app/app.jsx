import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
// import {AuthorizationStatus} from "../../const.js";
import {filmsType, filmType} from "../../types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import Player from "../player/player.jsx";
import withVideo from "../../hocs/with-video/with-video.js";
import SignIn from "../sign-in/sign-in.jsx";
import AddReview from "../add-review/add-review.jsx";
import {ActionCreator} from "../../reducer/watch/watch.js";
import {getGenreMovies, getMovie, getIsPlayerActive} from "../../reducer/watch/selectors.js";
import {getPromoMovie} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";


const PlayerWrapped = withVideo(Player);

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
    const {genreFilms, onSmallMovieCardClick, onPlayButtonClick, login, isAuthorization} = this.props;
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
          <Route exact path="/sign">
            {isAuthorization ? this._renderApp() : <SignIn onSubmit={login} /> }
          </Route>
          <Route exact path="/dev-review">
            <AddReview film={genreFilms[0]} />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  isAuthorization: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  genreFilms: filmsType.isRequired,
  mainFilm: PropTypes.oneOfType([
    () => null,
    filmType.isRequired,
  ]),
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
  isAuthorization: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onGenreItemClick(genre) {
    dispatch(ActionCreator.setGenre(genre));
    dispatch(ActionCreator.resetFilmsCount());
  },
  onSmallMovieCardClick(film) {
    dispatch(ActionCreator.setFilm(film));
    dispatch(ActionCreator.setGenre(film.genre));
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

