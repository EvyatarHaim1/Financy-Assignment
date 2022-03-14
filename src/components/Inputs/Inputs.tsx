import React from "react";
import MonthYearPicker from "./MonthYearPicker/MonthYearPicker";
import styles from "./Inputs.module.css";

interface Props {
  price: number;
  setPrice(price: number): void;
  date: Date;
  setDate(date: Date): void;
  months: number;
  setMonths(months: number): void;
}

const Inputs: React.FC<Props> = ({
  price,
  setPrice,
  date,
  setDate,
  months,
  setMonths,
}) => {
  return (
    <div className={styles.fields}>
      <div className={styles.priceSection}>
        <h4 className={styles.input_title}>Total amount</h4>
        <div className={styles.inputWrapper}>
          <span className={styles.currency}>$</span>
          <input
            type="number"
            className={styles.input}
            placeholder="price"
            name="amount"
            defaultValue={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
      </div>

      <div>
        <h4 className={styles.input_title}>Reach goal by</h4>
        <MonthYearPicker
          classes={styles.date}
          date={date}
          setDate={setDate}
          months={months}
          setMonths={setMonths}
        />
      </div>
    </div>
  );
};

export default Inputs;
