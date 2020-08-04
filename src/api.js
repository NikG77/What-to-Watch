import axios from "axios";
import {Error} from "./const";


export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    if (err.response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw err;

  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

