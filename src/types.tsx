export interface Props {
  price: number;
  setPrice(price: number): void;
  date: Date;
  setDate(date: Date): void;
  monthlyAmount: number;
}

export type Month = string;
export type Year = number;

export const months: Month[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
