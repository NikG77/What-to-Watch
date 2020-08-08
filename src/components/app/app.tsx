import * as React from "react";

import {Redirect, Route, Router, Switch} from "react-router-dom";
import {connect} from "react-redux";

import {AppRoute} from "../../const";
import {FilmType} from "../../types";
import history from "../../history";
import {ActionCreator as ActionCreatorWatch} from "../../reducer/watch/watch";
import {getGenreMovies} from "../../reducer/watch/selectors";
import {getFilmsLoadingStatus, getPromoFilmLoadingStatus} from "../../reducer/data/selectors";
import {getAuthorizationStatus, getAuthorizationLoadingStatus} from "../../reducer/user/selectors";
import {Operation as UserOperation} from "../../reducer/user/user";

import AddReview from "../add-review/add-review";
import Error404 from "../error404/error404";
import Loader from "../loader/loader";
import Main from "../main/main";
import MoviePage from "../movie-page/movie-page";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import PrivateRoute from "../private-route/private-route";
import SignIn from "../sign-in/sign-in";
import withVideo from "../../hocs/with-video/with-video";
import withAddReview from "../../hocs/with-add-review/with-add-review";

interface Props {
  genreFilms: Array<FilmType>;
  isAuthorization: boolean;
  isAuthorizationLoading: boolean;
  isFilmsLoading: boolean;
  isPromoLoading: boolean;
  login: () => void;
  onGenreItemClick: () => void;
}

const PlayerWrapped = withVideo(Player);
const AddReviewWrapped = withAddReview(AddReview);

const App: React.FunctionComponent<Props> = (props: Props) => {

  const {
    genreFilms,
    isAuthorization,
    isAuthorizationLoading,
    isFilmsLoading,
    isPromoLoading,
    login,
    onGenreItemClick,
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
          render={(routeProps) => {
            return <MoviePage
              genreFilms={genreFilms}
              id={+routeProps.match.params.id}
            />;
          }}/>

        <Route exact path={`${AppRoute.PLAYER}/:id`}
          render={(routeProps) => {
            return <PlayerWrapped id={+routeProps.match.params.id} />;
          }}/>

        <Route exact path={AppRoute.LOGIN}
          render={() => {
            return (
              isAuthorization ? <Redirect to={AppRoute.ROOT} /> : <SignIn onSubmit={login} />
            );
          }} />

        <PrivateRoute exact path={`${AppRoute.FILM}/:id${AppRoute.ADD_REVIEW}`}
          render={(routeProps) => {
            return <AddReviewWrapped id={+routeProps.match.params.id} />;
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

