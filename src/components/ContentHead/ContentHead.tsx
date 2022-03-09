import React from "react";
import { styles } from "./ContentHead.styles";
import HouseIcon from "../../assets/icons/buy-a-house.svg";

const ContentHead = (): JSX.Element => {
  return (
    <div style={styles.container}>
      <img src={HouseIcon} height={64} alt="houseIcon" />
      <div style={styles.fields}>
        <h2>Buy a house</h2>
        <h5>Saving goal</h5>
      </div>
    </div>
  );
};

export default ContentHead;
