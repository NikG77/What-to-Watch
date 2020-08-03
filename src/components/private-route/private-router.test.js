import React from "react";
import renderer from "react-test-renderer";
import PrivateRouter from "./private-route.jsx";
import history from "../../history.js";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../const.js";

const mockStore = configureStore([]);


it(`PrivateRouter component render correctly`, () => {
  const store = mockStore({
    [NameSpace.WATCH]: {
      genre: `All genres`,
      movieCount: 4,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isAuthorizationLoading: false,
    },
    [NameSpace.DATA]: {
      allMovies: [],
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <PrivateRouter
              render={() => {}}
              path={``}
              exact={true}
              isAuthorizationStatus={false}
              isAuthorizationLoading={false}
            />
          </Router>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
