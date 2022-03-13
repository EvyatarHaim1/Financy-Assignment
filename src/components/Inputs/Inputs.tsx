import React from "react";
import classes from "./Inputs.styles.ts";
import { Props, months } from "../../types";

const Inputs = (props: Partial<Props>): JSX.Element => {
  const { price, setPrice, date, setDate } = props;

  // const handlePrice = (e: React.FormEvent<HTMLInputElement>) => {
  //   setPrice!(Number(e.currentTarget.value));
  // };

  return (
    <div className={classes.fields}>
      <div className={classes.priceSection}>
        <h4 className={classes.title}>Total amount</h4>
        <div className={classes.inputWrapper}>
          <span className={classes.currency}>$</span>
          <input
            type="number"
            className={classes.input}
            placeholder="price"
            // name="amount"
            // value={price}
            //onChange={(price) => handlePrice(price)}
          />
        </div>
      </div>

      <div className={classes.dateSection}>
        <h4 className={classes.title}>Reach goal by</h4>
        <div className={classes.date}>{}</div>
      </div>
    </div>
  );
};

export default Inputs;
