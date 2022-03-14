import React from "react";
import styles from "./ContentHead.module.css";
import HouseIcon from "../../assets/icons/buy-a-house.svg";

const ContentHead: React.FC = () => {
  return (
    <div className={styles.content__head__container}>
      <img
        src={HouseIcon}
        className={styles.houseIcon}
        height={64}
        alt="houseIcon"
      />
      <div className={styles.fields}>
        <h2 className={styles.content_title}>Buy a house</h2>
        <br />
        <h5 className={styles.subTitle}>Saving goal</h5>
      </div>
    </div>
  );
};

export default ContentHead;
