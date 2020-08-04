import NameSpace from "../name-space";
import {AuthorizationStatus} from "../../const";

const NAME_SPACE = NameSpace.USER;


export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus === AuthorizationStatus.AUTH;
};

export const getUserInfo = (state) => state[NAME_SPACE].userInfo;

export const getAuthorizationLoadingStatus = (state) => state[NAME_SPACE].isAuthorizationLoading;


