import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import {filmsType, filmType} from "../../types/types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import Player from "../player/player.jsx";
import withVideo from "../../hocs/with-video/with-video.js";
import SignIn from "../sign-in/sign-in.jsx";
import AddReview from "../add-review/add-review.jsx";
import MyList from "../my-list/my-list.jsx";
import {ActionCreator} from "../../reducer/watch/watch.js";
import {getGenreMovies, getFilmsLoadingStatus} from "../../reducer/watch/selectors.js";
import {getPromoMovie} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import history from "../../history.js";
import {AppRoute} from "../../const.js";
import {Link} from "react-router-dom";
import Loader from "../loader/loader.jsx";


const PlayerWrapped = withVideo(Player);

const App = (props) => {

  const {genreFilms, login, isAuthorization, isFilmsLoading} = props;
  const {mainFilm, onGenreItemClick} = props;

  const renderApp = () => isFilmsLoading ? <Loader />
    : <Main
      genreFilms={genreFilms}
      mainFilm={mainFilm}
      onGenreItemClick={onGenreItemClick}
    />;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          {renderApp()}
        </Route>

        <Route path={`${AppRoute.FILM}/:id`} exact render={({match}) => {
          return <MoviePage
            genreFilms={genreFilms}
            id={+match.params.id}
          />;
        }}/>

        <Route path={`${AppRoute.PLAYER}/:id`} exact render={({match}) => {
          return <PlayerWrapped id={+match.params.id} />;
        }}/>

        <Route exact path={AppRoute.LOGIN} render={() => {
          return (
            isAuthorization ? renderApp() : <SignIn onSubmit={login} />
          );
        }} >
        </Route>

        <Route exact path="/dev-review">
          <AddReview film={genreFilms[0]} />
        </Route>

        <Route exact path={AppRoute.MY_LIST}>
          <MyList />
        </Route>

        <Route
          render={() => (
            <Fragment>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to={AppRoute.ROOT}>Go to main page</Link>
            </Fragment>
          )}
        />

      </Switch>
    </Router>
  );
};


App.propTypes = {
  isAuthorization: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  genreFilms: filmsType.isRequired,
  mainFilm: PropTypes.oneOfType([
    () => null,
    filmType.isRequired,
  ]),
  onGenreItemClick: PropTypes.func.isRequired,
  // film: PropTypes.oneOfType([
  //   filmType.isRequired,
  //   PropTypes.oneOf([null]).isRequired,
  // ]),
  isFilmsLoading: PropTypes.oneOfType([
    () => null,
    PropTypes.bool.isRequired,
  ]),
  // onFilmIdSet: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genreFilms: getGenreMovies(state),
  // film: getFilm(state),
  mainFilm: getPromoMovie(state),
  isAuthorization: getAuthorizationStatus(state),
  isFilmsLoading: getFilmsLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onGenreItemClick(genre) {
    dispatch(ActionCreator.setGenre(genre));
    dispatch(ActionCreator.resetFilmsCount());
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

