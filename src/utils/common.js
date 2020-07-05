import moment from 'moment';

export const formatForDateTime = (date) => moment(date).format(`YYYY-MM-DD`);

export const reformatDate = (date) => moment(date).format(`LL`);
// без использования moment
// export const reformatDate = (date) => new Intl.DateTimeFormat(`en-EN`, {year: `numeric`, month: `long`, day: `numeric`}).format(new Date(date));

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
