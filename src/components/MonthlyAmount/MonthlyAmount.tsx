import React from "react";
import styles from "./MonthlyAmount.module.css";

interface Props {
  price: number;
  monthlyAmount: number;
}

const MonthlyAmount: React.FC<Props> = ({ price, monthlyAmount }) => {
  return (
    <div className={styles.monthly_amount_container}>
      <div className={styles.topSection}>
        <div className={styles.monthly_amount_title}>Monthly amount</div>
        <div className={styles.price}>
          {`$`}
          {Math.trunc(monthlyAmount)}
        </div>
      </div>
      <p className={styles.bottom_section}>
        You’re planning <strong> 48 monthly deposits </strong> to reach your
        <strong> ${Math.trunc(price)} </strong>
        goal by <strong> October 2020.</strong>
      </p>
    </div>
  );
};

export default MonthlyAmount;
