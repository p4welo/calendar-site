import moment from 'moment';

export const isNowOrFuture = (date) => moment(date).isSameOrAfter(moment());