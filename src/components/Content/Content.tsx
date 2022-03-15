import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/scss/main.scss";

import ConfirmBtn from "../ConfirmBtn";
import ContentHead from "../ContentHead/ContentHead";
import Inputs from "../Inputs";
import MonthlyAmount from "../MonthlyAmount";
import styles from "./Content.module.css";

const Content: React.FC = () => {
  const [price, setPrice] = useState<number>(1);
  const [date, setDate] = useState<Date>(new Date());
  const [months, setMonths] = useState<number>(1);
  const [monthlyAmount, setMonthlyAmount] = useState<number>(1);

  useEffect(() => {
    let price_to_goal = price / months;
    setMonthlyAmount(price_to_goal);
  }, [price, date, months]);

  const handleConfirm = () => {
    if (monthlyAmount > 1) {
      toast(
        `Your monthly amount set to ${monthlyAmount} and your total price goal set to ${price}`
      );
    } else {
      alert(
        "Set your price/date to a different value than the defaults in order to set the monthly amount"
      );
    }
  };

  return (
    <div className={styles.content__container}>
      <ContentHead />
      <Inputs
        price={price}
        setPrice={setPrice}
        date={date}
        setDate={setDate}
        months={months}
        setMonths={setMonths}
      />
      <MonthlyAmount
        monthlyAmount={monthlyAmount}
        price={price}
        months={months}
      />
      <ConfirmBtn handleConfirm={handleConfirm} />
      <ToastContainer />
    </div>
  );
};

export default Content;
