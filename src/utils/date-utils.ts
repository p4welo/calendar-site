import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import { groupBy } from 'ramda';

import { Event } from '@app/model';

export const isNowOrFuture = (date: string) => !dayjs(date).isBefore(dayjs());

export const isNew = (date: string) => dayjs().diff(dayjs(date), 'day') < 7;

export const formatDate = (date: string) => {
  dayjs.locale('pl');
  return dayjs(date).format('DD MMMM YYYY');
};

export const groupByMonth = (events: Event[]) => {
  return groupBy((event: Event) => dayjs(event.dateFrom).format('YYYYMM'))(events);
};

export const formatHeaderFromKey = (key: string) => {
  dayjs.locale('pl');
  return dayjs(key, 'YYYYMM').format('MMMM YYYY');
};
