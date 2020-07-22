import moment from 'moment';
import Swal from "sweetalert2";

export const formatForDateTime = (date) => moment(date).format(`YYYY-MM-DD`);

export const reformatDate = (date) => moment(date).format(`LL`);
// без использования moment
// export const reformatDate = (date) => new Intl.DateTimeFormat(`en-EN`, {year: `numeric`, month: `long`, day: `numeric`}).format(new Date(date));

export const formateDuration = (time) => {
  const hours = Math.trunc(time / 3600);
  const minutes = Math.trunc(time / 60 % 60);
  const seconds = Math.trunc(time % 60);

  return `${hours}:${minutes}:${seconds}`;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const errorPopup = (err) => {
  if (!err.response && !err.request) {
    err.response.status = `Нет соединения`;
    err.response.data.error = `Проверьте соедение с интернетом`;
  } else if (!err.response && err.request) {
    err.response.status = `Oops... ${err.request.status}`;
    err.response.data.error = err.request.data.error;
  }
  return Swal.fire({
    icon: `error`,
    title: `Oops... ${err.response.status}`,
    text: err.response.data.error,
  });
};
