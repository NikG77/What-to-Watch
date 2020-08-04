import React from "react";
import PropTypes from "prop-types";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {connect} from "react-redux";

import {AppRoute} from "../../const.js";
import {filmsType} from "../../types/types";
import history from "../../history.js";
import {ActionCreator as ActionCreatorWatch} from "../../reducer/watch/watch.js";
import {getGenreMovies} from "../../reducer/watch/selectors.js";
import {getFilmsLoadingStatus, getPromoFilmLoadingStatus} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus, getAuthorizationLoadingStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";

import AddReview from "../add-review/add-review.jsx";
import Error404 from "../error404/error404.jsx";
import Loader from "../loader/loader.jsx";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import MyList from "../my-list/my-list.jsx";
import Player from "../player/player.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import withVideo from "../../hocs/with-video/with-video.js";

const PlayerWrapped = withVideo(Player);

const App = (props) => {

  const {
    genreFilms,
    isAuthorization,
    isAuthorizationLoading,
    isFilmsLoading,
    isPromoLoading,
    login,
    onGenreItemClick
  } = props;

  return (isAuthorizationLoading || isFilmsLoading || isPromoLoading ? <Loader /> :
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT}
          render={() => {
            return <Main
              genreFilms={genreFilms}
              onGenreItemClick={onGenreItemClick}
            />;
          }}/>

        <Route exact path={`${AppRoute.FILM}/:id`}
          render={({match}) => {
            return <MoviePage
              genreFilms={genreFilms}
              id={+match.params.id}
            />;
          }}/>

        <Route exact path={`${AppRoute.PLAYER}/:id`}
          render={({match}) => {
            return <PlayerWrapped id={+match.params.id} />;
          }}/>

        <Route exact path={AppRoute.LOGIN}
          render={() => {
            return (
              isAuthorization ? <Redirect to={AppRoute.ROOT} /> : <SignIn onSubmit={login} />
            );
          }} />

        <PrivateRoute exact path={`${AppRoute.FILM}/:id${AppRoute.ADD_REVIEW}`}
          render={({match}) => {
            return <AddReview id={+match.params.id} />;
          }}
        />

        <PrivateRoute exact path={AppRoute.MY_LIST}
          render={() => <MyList />}
        />

        <Route>
          <Error404 />
        </Route>

      </Switch>
    </Router>
  );
};


App.propTypes = {
  genreFilms: filmsType.isRequired,
  isAuthorization: PropTypes.bool.isRequired,
  isAuthorizationLoading: PropTypes.bool.isRequired,
  isFilmsLoading: PropTypes.bool.isRequired,
  isPromoLoading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  onGenreItemClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genreFilms: getGenreMovies(state),
  isAuthorizationLoading: getAuthorizationLoadingStatus(state),
  isAuthorization: getAuthorizationStatus(state),
  isFilmsLoading: getFilmsLoadingStatus(state),
  isPromoLoading: getPromoFilmLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onGenreItemClick(genre) {
    dispatch(ActionCreatorWatch.setGenre(genre));
    dispatch(ActionCreatorWatch.resetFilmsCount());
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

