import React from "react";
import styles from "./ConfirmBtn.module.css";

interface Props {
  handleConfirm(): void;
}

const ConfirmBtn: React.FC<Props> = ({ handleConfirm }) => {
  return (
    <button onClick={handleConfirm} className={styles.btn}>
      Confirm
    </button>
  );
};

export default ConfirmBtn;
