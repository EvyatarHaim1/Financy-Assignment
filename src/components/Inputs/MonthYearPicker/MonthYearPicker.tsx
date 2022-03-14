import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/src/stylesheets/datepicker.scss";

import styles from "./MonthYearPicker.module.css";

interface Props {
  date: Date;
  setDate: (date: Date) => void;
  months: number;
  setMonths(months: number): void;
  classes: string;
}

const MonthYearPicker: React.FC<Props> = ({
  date,
  setDate,
  months,
  setMonths,
  classes,
}) => {
  const handleChangeMonth = (date: Date) => {
    setDate(date!);
    let selected_month_To_ms = date.getTime();
    let now_to_ms = new Date().getTime();
    let days_to_goal = (selected_month_To_ms - now_to_ms) / 86400000; // 86400000 ms represents one day
    let months_to_goal = Math.round(days_to_goal / 30);
    setMonths(months_to_goal);
  };
  return (
    <DatePicker
      className={styles.date}
      dateFormat="MMMM yyyy"
      minDate={new Date()}
      showMonthYearPicker
      selected={date}
      onChange={(date) => handleChangeMonth(date!)}
    />
  );
};

export default MonthYearPicker;
