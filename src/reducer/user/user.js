import {AuthorizationStatus, Error} from "../../const.js";
import {adaptAuthInfo} from "../../adapters/adapters.js";
import {errorPopup} from "../../utils/utils.js";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {},
  isAuthorizationLoading: false,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_INFO: `SET_USER_INFO`,
  SET_AUTHORIZATION_LOADING: `SET_AUTHORIZATION_LOADING`,
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  setUserInfo: (status) => ({
    type: ActionType.SET_USER_INFO,
    payload: status,
  }),

  setAuthorizationLoading: (state) => ({
    type: ActionType.SET_AUTHORIZATION_LOADING,
    payload: state,
  }),

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.payload,
      });
    case ActionType.SET_AUTHORIZATION_LOADING:
      return Object.assign({}, state, {
        isAuthorizationLoading: action.payload,
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setAuthorizationLoading(true));
    return api.get(`/login`)
      .then(({data}) => {
        const authInfo = adaptAuthInfo(data);
        dispatch(ActionCreator.setUserInfo(authInfo));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setAuthorizationLoading(false));
      })
      .catch((err) => {
        // dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
        // dispatch(ActionCreator.setUserInfo({}));
        dispatch(ActionCreator.setAuthorizationLoading(false));
        if (err.response.status !== Error.UNAUTHORIZED) {
          errorPopup(err);
        }
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setAuthorizationLoading(true));
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(({data}) => {
        const authInfo = adaptAuthInfo(data);
        dispatch(ActionCreator.setUserInfo(authInfo));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setAuthorizationLoading(false));
      })
       .catch((err) => {
         dispatch(ActionCreator.setAuthorizationLoading(false));
         const {response} = err;
         if (response.status === Error.BAD_REQUEST) {
           dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.BAD_REQUEST));
         }
         return errorPopup(err);
       });
  },
};


export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};

