import dayjs from 'dayjs';
import 'dayjs/locale/pl'
import {groupBy} from 'ramda';

export const isNowOrFuture = (date) => !dayjs(date).isBefore(dayjs());

export const isNew = (date) => dayjs().diff(dayjs(date), 'day') < 7;

export const formatDate = (date) => {
  dayjs.locale('pl');
  return dayjs(date).format("DD MMMM YYYY");
};

export const groupByMonth = (events) => {
  return groupBy((event) => dayjs(event.dateFrom).format('YYYYMM'))(events);
};

export const formatHeaderFromKey = (key) => {
  dayjs.locale('pl');
  return dayjs(key, 'YYYYMM').format("MMMM YYYY");
};
