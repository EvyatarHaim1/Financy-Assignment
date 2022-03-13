import React, { useState } from "react";
import ConfirmBtn from "../ConfirmBtn";
import ContentHead from "../ContentHead/ContentHead";
import Inputs from "../Inputs";
import MonthlyAmount from "../MonthlyAmount";
import classes from "./Content.styles.ts";

const Content = (): JSX.Element => {
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(new Date());
  const [monthlyAmount, setMonthlyAmount] = useState(0);

  return (
    <div className={classes.container}>
      <ContentHead />
      <Inputs price={price} setPrice={setPrice} date={date} setDate={setDate} />
      <MonthlyAmount monthlyAmount={monthlyAmount} price={price} />
      <ConfirmBtn />
    </div>
  );
};

export default Content;
