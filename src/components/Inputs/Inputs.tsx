import React from "react";
import { styles } from "./Inputs.styles";
import { Props, months } from "../../types";

const Inputs = (props: Partial<Props>): JSX.Element => {
  const { price, setPrice, date, setDate } = props;

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    name === "amount" ? setPrice!(value) : setDate!(value);
  };

  return (
    <div style={styles.fields}>
      <div style={styles.priceSection}>
        <h4 style={styles.title}>Total amount</h4>
        <span>$</span>
        <input
          type="number"
          name="amount"
          style={styles.input}
          value={price}
          onChange={(price) => handleChange(price)}
        />
      </div>

      <div style={styles.dateSection}>
        <h4 style={styles.title}>Reach goal by</h4>
        <div style={styles.input}>{months[new Date().getMonth()]}</div>
      </div>
    </div>
  );
};

export default Inputs;
