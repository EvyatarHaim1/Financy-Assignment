import colors from "../../constants";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    border: "1px solid #e9eef2",
  },

  topSection: {
    display: "flex",
    height: "24px",
    justifyContent: "space-between",
    padding: "24px 30.5px 16px 32px",
  },

  title: {
    fontSize: "20px",
  },

  price: {
    fontSize: "32px",
    color: colors["blue"],
  },

  text: {
    padding: "24px 32px",
    backgroundColor: colors["lightGreyBG"],
    height: "24px",
  },
};

export default styles;
