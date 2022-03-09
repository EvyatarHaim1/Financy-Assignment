import React from "react";
import { styles } from "./MonthlyAmount.styles";
import { Props } from "../../types";

const MonthlyAmount = (props: Partial<Props>): JSX.Element => {
  const { price, monthlyAmount } = props;

  return (
    <div style={styles.container}>
      <div style={styles.topSection}>
        <div>Monthly amount</div>
        <div style={styles.price}>{monthlyAmount}</div>
      </div>
      <p style={styles.text}>
        You’re planning<strong>48 monthly deposits</strong> to reach your
        <strong>{price}</strong> goal by <strong>October 2020.</strong>
      </p>
    </div>
  );
};

export default MonthlyAmount;
