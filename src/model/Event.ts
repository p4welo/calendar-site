export interface Event {
  dateFrom: string;
  dateTo: string;
  date?: string;
  title: string;
  city: string;
  path: string;
  new?: boolean;
  promoted?: boolean;
  cancelled?: boolean;
  visible?: boolean;
  multiday: boolean;
  image?: any;
}
