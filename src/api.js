import axios from "axios";
import {Error} from "./const.js";


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
    if (!err.response) {
      err.response = {};
      err.response.status = `Нет соединения`;
      err.response.data = {};
      err.response.data.error = `Проверьте соедение с интернетом`;
    }

    if (err.response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
      // Запрос авторизации - это особый случай и важно дать понять приложению, что запрос был неудачным.
    }

    throw err;

  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

