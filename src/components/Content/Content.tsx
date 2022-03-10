import React, { useState, useMemo } from "react";
import ConfirmBtn from "../ConfirmBtn";
import ContentHead from "../ContentHead";
import Inputs from "../Inputs";
import MonthlyAmount from "../MonthlyAmount";
import { styles } from "./Content.styles";

const Content = (): JSX.Element => {
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(new Date());
  const [monthlyAmount, setMonthlyAmount] = useState(0);

  // const calculateSum = useMemo(() => {
  //   return (price * date) / monthlyAmount;
  // }, [price, date, monthlyAmount]);

  return (
    <div style={styles.container}>
      <ContentHead />
      <Inputs price={price} setPrice={setPrice} date={date} setDate={setDate} />
      <MonthlyAmount monthlyAmount={monthlyAmount} price={price} />
      <ConfirmBtn />
    </div>
  );
};

export default Content;
