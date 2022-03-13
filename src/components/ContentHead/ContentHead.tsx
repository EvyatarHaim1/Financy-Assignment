import classes from "./ContentHead.styles.ts";
import HouseIcon from "../../assets/icons/buy-a-house.svg";

const ContentHead = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <img src={HouseIcon} height={64} alt="houseIcon" />
      <div className={classes.fields}>
        <h2 className={classes.title}>Buy a house</h2>
        <br />
        <h5 className={classes.subTitle}>Saving goal</h5>
      </div>
    </div>
  );
};

export default ContentHead;
