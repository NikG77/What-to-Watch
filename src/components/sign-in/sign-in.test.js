import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";

const mockStore = configureStore([]);


const noop = () => {};

it(`SignIn component render correctly`, () => {


  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });


  const tree = renderer
    .create(
        <Provider store={store}>
          <SignIn
            onSubmit={noop}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
