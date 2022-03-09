import React, { useMemo } from "react";
import Content from "./components/Content";
import { styles } from "./App.styles";
import { useState } from "react";

export function App(): JSX.Element {
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(new Date());
  const [months, setMonths] = useState(0);

  const monthlyAmount = useMemo(() => {
    return price * months;
  }, [price, months]);

  return (
    <div>
      <div data-testid="greetings-container" style={styles.title}>
        Let's plan your <strong>saving goal</strong>
      </div>
      <div style={styles.contant}>
        <Content
          price={price}
          setPrice={setPrice}
          date={date}
          setDate={setDate}
          monthlyAmount={monthlyAmount}
        />
      </div>
    </div>
  );
}
