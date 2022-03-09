import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from "./Inputs.styles";
import { Props } from "../../types";

const Inputs = (props: Partial<Props>): JSX.Element => {
  const { price, setPrice, date, setDate } = props;

  return (
    <div style={styles.inputs}>
      <div style={styles.price}>
        <h4 style={styles.title}>Total amount</h4>
        <input
          type="number"
          placeholder="Price"
          name="amount"
          value={price}
          onChange={(price) => setPrice(price)}
          style={styles.input}
        />
      </div>
      <div style={styles.date}>
        <h4 style={styles.title}>Reach goal by</h4>
        {/* <input
          type="date"
          placeholder="Date"
          style={styles.input}
          name="reachDate"
          value={date}
          onChange={(date) => setDate(date)}
        /> */}
        <DatePicker selected={date} onChange={(date: Date) => setDate!(date)} />
      </div>
    </div>
  );
};

export default Inputs;
