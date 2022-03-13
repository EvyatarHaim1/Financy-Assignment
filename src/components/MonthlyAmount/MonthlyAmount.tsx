import { Props } from "../../types";
import classes from "./MonthlyAmount.styles.ts";

const MonthlyAmount = (props: Partial<Props>): JSX.Element => {
  const { price, monthlyAmount } = props;

  return (
    <div className={classes.container}>
      <div className={classes.topSection}>
        <div>Monthly amount</div>
        <div className={classes.price}>${monthlyAmount}</div>
      </div>
      <p className={classes.text}>
        You’re planning<strong> 48 monthly deposits</strong> to reach your
        <strong> {price}</strong> goal by <strong>October 2020.</strong>
      </p>
    </div>
  );
};

export default MonthlyAmount;
