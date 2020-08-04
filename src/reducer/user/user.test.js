import {reducer, ActionCreator, ActionType, Operation} from "./user";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {AuthorizationStatus} from "../../const";
import {adaptAuthInfo} from "../../adapters/adapters";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userInfo: {},
    isAuthorizationLoading: false,
  });
});

it(`Reducer should change authorizationStatus by a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });
});

it(`Reducer should change userInfo by a given value`, () => {
  expect(reducer({
    userInfo: {}
  }, {
    type: ActionType.SET_USER_INFO,
    payload: {fake: true},
  })).toEqual({
    userInfo: {fake: true},
  });
});

it(`Reducer should change authorization loading by a given value`, () => {
  expect(reducer({
    isAuthorizationLoading: false,
  }, {
    type: ActionType.SET_AUTHORIZATION_LOADING,
    payload: true,
  })).toEqual({
    isAuthorizationLoading: true,
  });
});


describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`Action creator for set user info returns correct action`, () => {
    expect(ActionCreator.setUserInfo({})).toEqual({
      type: ActionType.SET_USER_INFO,
      payload: {},
    });
  });

  it(`Action creator for authorization loading returns correct action`, () => {
    expect(ActionCreator.setAuthorizationLoading(true)).toEqual({
      type: ActionType.SET_AUTHORIZATION_LOADING,
      payload: true,
    });
  });

});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call get to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, {fake: true});
    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_INFO,
          payload: adaptAuthInfo({fake: true}),
        });
      });
  });

  it(`Should make a correct API call post to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authData = {fake: true};
    const loginLoader = Operation.login(authData);

    apiMock
      .onPost(`/login`)
      .reply(200, {fake: true});
    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_INFO,
          payload: adaptAuthInfo({fake: true}),
        });
      });
  });
});

