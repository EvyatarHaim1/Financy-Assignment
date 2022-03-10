import { colors } from "../../constants";

export const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    borderRadius: "8px",
    border: "1px solid #E9EEF2",
  },

  topSection: {
    display: "flex",
    height: "24px",
    justifyContent: "space-between",
    padding: "24px 30.5px 16px 32px",
  },

  title: {
    fontsize: "20px",
  },

  price: {
    fontSize: "32px",
    color: "#0079FF",
  },
  text: {
    padding: "24px 32px",
    backgroundColor: colors["lightGreyBG"],
    height: "24px",
  },
};
