import React from "react";
import ConfirmBtn from "../ConfirmBtn";
import ContentHead from "../ContentHead";
import Inputs from "../Inputs";
import MonthlyAmount from "../MonthlyAmount";
import { Props } from "../../types";
import { styles } from "./Content.styles";

const Content = (props: Props): JSX.Element => {
  const { price, setPrice, date, setDate, monthlyAmount } = props;

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
