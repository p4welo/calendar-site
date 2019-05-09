import dayjs from 'dayjs';
import 'dayjs/locale/pl'

export const isNowOrFuture = (date) => !dayjs(date).isBefore(dayjs());

export const isNew = (date) => dayjs().diff(dayjs(date), 'day') < 7;

export const formatDate = (date) => {
  dayjs.locale('pl');
  return dayjs(date).format("DD MMMM YYYY");
};