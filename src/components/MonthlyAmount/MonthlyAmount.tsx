import React from "react";
import styles from "./MonthlyAmount.module.css";
import { monthsArr } from "../../types";

interface Props {
  price: number;
  months: number;
  date: Date;
  monthlyAmount: number;
}

const MonthlyAmount: React.FC<Props> = ({
  price,
  months,
  date,
  monthlyAmount,
}) => {
  return (
    <div className={styles.monthly_amount_container}>
      <div className={styles.topSection}>
        <div className={styles.monthly_amount_title}>Monthly amount</div>
        <div className={styles.price}>
          {`$`}
          {monthlyAmount > 1 ? Math.trunc(monthlyAmount) : 1}
        </div>
      </div>
      <p className={styles.bottom_section}>
        You’re planning <strong> {months} monthly deposits </strong> to reach
        your
        <strong> ${Math.trunc(price)} </strong>
        goal by{" "}
        <strong>
          {" "}
          {monthsArr[date.getMonth()]} {date.getUTCFullYear()}
        </strong>
      </p>
    </div>
  );
};

export default MonthlyAmount;
