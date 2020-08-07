import moment from "moment";
import Swal from "sweetalert2";
import {Time} from "../const";

export const formatForDateTime = (date) => moment(date).format(`YYYY-MM-DD`);

export const reformatDate = (date) => moment(date).format(`LL`);

export const formateDuration = (time) => {
  const seconds = Math.trunc(time % Time.SECONDS_IN_MINUTE);
  const minutes = Math.trunc(time / Time.SECONDS_IN_MINUTE);
  const hours = Math.trunc(minutes / Time.MINUTES_IN_HOUR);

  return `${hours.toString().padStart(2, `0`)}:${minutes.toString().padStart(2, `0`)}:${seconds.toString().padStart(2, `0`)}`;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const errorPopup = (err) => {
  if (!err.response) {
    err.response = {};
    err.response.status = `Нет соединения`;
    err.response.data = {};
    err.response.data.error = `Проверьте соедение с интернетом`;
  }

  return Swal.fire({
    icon: `error`,
    title: `Oops... ${err.response.status}`,
    text: err.response.data.error,
  });
};

export const noon = () => {

};
