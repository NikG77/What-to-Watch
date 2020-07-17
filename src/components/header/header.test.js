import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";

const mockStore = configureStore([]);

it(`Should Header render correctly`, () => {

  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Header
            isMain={true}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

