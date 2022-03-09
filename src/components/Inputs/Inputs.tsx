import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CurrencyInput from "react-currency-input-field";
import { styles } from "./Inputs.styles";
import { Props } from "../../types";

const Inputs = (props: Partial<Props>): JSX.Element => {
  const { price, setPrice, date, setDate } = props;

  const handleChange = (value, name) => {
    name === "amount" ? setPrice!(value) : setDate!(value);
  };

  return (
    <div style={styles.inputs}>
      <div style={styles.price}>
        <h4 style={styles.title}>Total amount</h4>
        <CurrencyInput
          id="price"
          style={styles.input}
          name="amount"
          prefix="$"
          placeholder="Price"
          defaultValue={price}
          decimalsLimit={10}
          onValueChange={(value, name) => handleChange(value, name)}
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
        <DatePicker
          selected={date}
          name="reachDate"
          onChange={(date: Date) => handleChange!(date, name)}
        />
      </div>
    </div>
  );
};

export default Inputs;
