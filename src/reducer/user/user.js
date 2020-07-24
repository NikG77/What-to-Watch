import {AuthorizationStatus, Error} from "../../const.js";
import {adaptAuthInfo} from "../../adapters/adapters.js";
import {errorPopup} from "../../utils/utils.js";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {},
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_INFO: `SET_USER_INFO`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  setUserInfo: (status) => {
    return {
      type: ActionType.SET_USER_INFO,
      payload: status,
    };
  },
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
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(({data}) => {
        const authInfo = adaptAuthInfo(data);
        dispatch(ActionCreator.setUserInfo(authInfo));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
        dispatch(ActionCreator.setUserInfo({}));
        if (err.response.status !== Error.UNAUTHORIZED) {
          errorPopup(err);
        }
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(({data}) => {
        const authInfo = adaptAuthInfo(data);
        dispatch(ActionCreator.setUserInfo(authInfo));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
       .catch((err) => {
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

