import colors from "../../constants";

const styles = {
  container: {
    display: "flex",
    height: "24px",
    marginBottom: "28px",
  },

  fields: {
    display: "flex",
    flexDirection: "column" as "column",
    marginLeft: "16px",
  },

  title: {
    fontSize: "24px",
    fontFamily: "Rubik",
    marginBottom: "4px",
    color: colors["title"],
  },

  subTitle: {
    color: colors["subTitle"],
    fontSize: "16px",
  },
};

export default styles;
